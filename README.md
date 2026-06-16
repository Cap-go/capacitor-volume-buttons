# @capgo/capacitor-volume-buttons
<a href="https://capgo.app/"><img src="https://capgo.app/readme-banner.svg?repo=Cap-go/capacitor-volume-buttons" alt="Capgo - Instant updates for Capacitor" /></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_volume_buttons"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_volume_buttons"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>
Listen to volume button presses in Capacitor apps

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/volume-buttons/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

You can use our AI-Assisted Setup to install the plugin. Add the Capgo skills to your AI tool using the following command:

```bash
npx skills add https://github.com/cap-go/capacitor-skills --skill capacitor-plugins
```

Then use the following prompt:

```text
Use the `capacitor-plugins` skill from `cap-go/capacitor-skills` to install the `@capgo/capacitor-volume-buttons` plugin in my project.
```

If you prefer Manual Setup, install the plugin by running the following commands and follow the platform-specific instructions below:

```bash
npm install @capgo/capacitor-volume-buttons
npx cap sync
```

## API

<docgen-index>

* [`addListener('volumeButtonPressed', ...)`](#addlistenervolumebuttonpressed-)
* [`removeAllListeners()`](#removealllisteners)
* [`getPluginVersion()`](#getpluginversion)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor Volume Buttons Plugin for detecting hardware volume button presses.

### addListener('volumeButtonPressed', ...)

```typescript
addListener(eventName: 'volumeButtonPressed', listenerFunc: VolumeButtonListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for presses on the hardware volume buttons.

| Param              | Type                                                                  | Description                                            |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ |
| **`eventName`**    | <code>'volumeButtonPressed'</code>                                    | - The event name (must be 'volumeButtonPressed')       |
| **`listenerFunc`** | <code><a href="#volumebuttonlistener">VolumeButtonListener</a></code> | - The function to call when a volume button is pressed |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Removes all listeners for this plugin.

**Since:** 1.0.0

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### VolumeButtonPressed

Event data for volume button press.

| Prop            | Type                                                                    | Description                   |
| --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| **`direction`** | <code><a href="#volumebuttondirection">VolumeButtonDirection</a></code> | Direction of the button press |


### Type Aliases


#### VolumeButtonListener

Listener function for volume button events.

<code>(event: <a href="#volumebuttonpressed">VolumeButtonPressed</a>): void</code>


#### VolumeButtonDirection

Direction of volume button press.

<code>'up' | 'down'</code>

</docgen-api>
