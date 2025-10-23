import type { PluginListenerHandle } from '@capacitor/core';

/**
 * Direction of volume button press.
 *
 * @since 1.0.0
 */
export type VolumeButtonDirection = 'up' | 'down';

/**
 * Event data for volume button press.
 *
 * @since 1.0.0
 */
export interface VolumeButtonPressed {
  /** Direction of the button press */
  direction: VolumeButtonDirection;
}

/**
 * Listener function for volume button events.
 *
 * @since 1.0.0
 */
export type VolumeButtonListener = (event: VolumeButtonPressed) => void;

/**
 * Capacitor Volume Buttons Plugin for detecting hardware volume button presses.
 *
 * @since 1.0.0
 */
export interface VolumeButtonsPlugin {
  /**
   * Listen for presses on the hardware volume buttons.
   *
   * @param eventName - The event name (must be 'volumeButtonPressed')
   * @param listenerFunc - The function to call when a volume button is pressed
   * @returns A promise that resolves to a listener handle
   * @since 1.0.0
   * @example
   * ```typescript
   * const listener = await VolumeButtons.addListener(
   *   'volumeButtonPressed',
   *   (event) => {
   *     console.log(`Volume ${event.direction} button pressed`);
   *   }
   * );
   *
   * // Remove listener when done
   * await listener.remove();
   * ```
   */
  addListener(
    eventName: 'volumeButtonPressed',
    listenerFunc: VolumeButtonListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Removes all listeners for this plugin.
   *
   * @returns Promise that resolves when all listeners are removed
   * @since 1.0.0
   * @example
   * ```typescript
   * await VolumeButtons.removeAllListeners();
   * ```
   */
  removeAllListeners(): Promise<void>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { version } = await VolumeButtons.getPluginVersion();
   * console.log('Plugin version:', version);
   * ```
   */
  getPluginVersion(): Promise<{ version: string }>;
}
