import { Capacitor, WebPlugin } from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';

import type {
  VolumeButtonListener,
  VolumeButtonsPlugin,
} from './definitions';

export class VolumeButtonsWeb extends WebPlugin implements VolumeButtonsPlugin {
  private readonly platform = Capacitor.getPlatform();

  addListener(
    eventName: 'volumeButtonPressed',
    listenerFunc: VolumeButtonListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    this.notifyUnsupported();
    return super.addListener(
      eventName,
      listenerFunc,
    ) as Promise<PluginListenerHandle> & PluginListenerHandle;
  }

  removeAllListeners(): Promise<void> {
    this.notifyUnsupported();
    return super.removeAllListeners();
  }

  private notifyUnsupported() {
    if (this.platform === 'web') {
      console.warn('VolumeButtons is not supported in web builds.');
    }
  }
}
