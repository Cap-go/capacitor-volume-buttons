import type { PluginListenerHandle } from '@capacitor/core';

export type VolumeButtonDirection = 'up' | 'down';

export interface VolumeButtonPressed {
  direction: VolumeButtonDirection;
}

export type VolumeButtonListener = (event: VolumeButtonPressed) => void;

export interface VolumeButtonsPlugin {
  /**
   * Listen for presses on the hardware volume buttons.
   */
  addListener(
    eventName: 'volumeButtonPressed',
    listenerFunc: VolumeButtonListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Removes all listeners for this plugin.
   */
  removeAllListeners(): Promise<void>;
}
