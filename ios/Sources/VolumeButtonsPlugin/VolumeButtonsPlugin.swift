import AVFoundation
import Capacitor
import Foundation
import MediaPlayer
import UIKit

private extension MPVolumeView {
    static func setSystemVolume(_ volume: Float) {
        let volumeView = MPVolumeView(frame: .zero)
        guard let slider = volumeView.subviews.first(where: { $0 is UISlider }) as? UISlider else {
            return
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.01) {
            slider.value = volume
        }
    }
}

@objc(VolumeButtonsPlugin)
public class VolumeButtonsPlugin: CAPPlugin, CAPBridgedPlugin {
    private let PLUGIN_VERSION: String = "7.1.6"
    public let identifier = "VolumeButtonsPlugin"
    public let jsName = "VolumeButtons"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    private var audioLevel: Float = 0.0
    private var observingVolume = false
    private let audioSession = AVAudioSession.sharedInstance()

    override public func load() {
        super.load()

        do {
            try audioSession.setActive(true, options: [])
            audioLevel = audioSession.outputVolume
            audioSession.addObserver(self, forKeyPath: "outputVolume", options: .new, context: nil)
            observingVolume = true
        } catch {
            CAPLog.print("VolumeButtonsPlugin", "Failed to activate audio session: \(error.localizedDescription)")
        }
    }

    deinit {
        removeVolumeObserver()
    }

    private func removeVolumeObserver() {
        guard observingVolume else { return }

        audioSession.removeObserver(self, forKeyPath: "outputVolume", context: nil)
        observingVolume = false
    }

    override public func observeValue(
        forKeyPath keyPath: String?,
        of object: Any?,
        change: [NSKeyValueChangeKey: Any]?,
        context: UnsafeMutableRawPointer?
    ) {
        guard keyPath == "outputVolume" else {
            return
        }

        let newVolume = audioSession.outputVolume

        let eventName = "volumeButtonPressed"

        if newVolume > audioLevel {
            audioLevel = newVolume
            notifyListeners(eventName, data: ["direction": "up"])
        } else if newVolume < audioLevel {
            audioLevel = newVolume
            notifyListeners(eventName, data: ["direction": "down"])
        }

        if newVolume >= 0.999 {
            MPVolumeView.setSystemVolume(0.9375)
            audioLevel = 0.9375
        } else if newVolume <= 0.001 {
            MPVolumeView.setSystemVolume(0.0625)
            audioLevel = 0.0625
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.PLUGIN_VERSION])
    }

}
