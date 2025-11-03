package com.capgo.volumebuttons;

import android.view.KeyEvent;
import android.view.View;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "VolumeButtons")
public class VolumeButtonsPlugin extends Plugin {

    private final String pluginVersion = "7.1.9";

    @Override
    public void load() {
        super.load();
        getBridge()
            .getWebView()
            .setOnKeyListener(
                new View.OnKeyListener() {
                    @Override
                    public boolean onKey(View v, int keyCode, KeyEvent event) {
                        if (event.getAction() != KeyEvent.ACTION_UP) {
                            return false;
                        }

                        if (keyCode == KeyEvent.KEYCODE_VOLUME_UP) {
                            JSObject data = new JSObject();
                            data.put("direction", "up");
                            notifyListeners(VolumeButtons.EVENT_VOLUME_BUTTON_PRESSED, data);
                            return true;
                        } else if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
                            JSObject data = new JSObject();
                            data.put("direction", "down");
                            notifyListeners(VolumeButtons.EVENT_VOLUME_BUTTON_PRESSED, data);
                            return true;
                        }

                        return false;
                    }
                }
            );
    }

    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
