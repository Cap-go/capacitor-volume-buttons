import Foundation

@objc public class VolumeButtons: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
