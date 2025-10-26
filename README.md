# @capgo/capacitor-volume-buttons
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>
Listen to volume button presses in Capacitor apps

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/volume-buttons/

## Install

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
