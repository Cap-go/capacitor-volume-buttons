# @capgo/volume-buttons
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>
Listen to volume button presses in Capacitor apps

## Install

```bash
npm install @capgo/volume-buttons
npx cap sync
```

## API

<docgen-index>

* [`addListener('volumeButtonPressed', ...)`](#addlistenervolumebuttonpressed-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('volumeButtonPressed', ...)

```typescript
addListener(eventName: 'volumeButtonPressed', listenerFunc: VolumeButtonListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for presses on the hardware volume buttons.

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'volumeButtonPressed'</code>                                    |
| **`listenerFunc`** | <code><a href="#volumebuttonlistener">VolumeButtonListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Removes all listeners for this plugin.

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### VolumeButtonPressed

| Prop            | Type                                                                    |
| --------------- | ----------------------------------------------------------------------- |
| **`direction`** | <code><a href="#volumebuttondirection">VolumeButtonDirection</a></code> |


### Type Aliases


#### VolumeButtonListener

<code>(event: <a href="#volumebuttonpressed">VolumeButtonPressed</a>): void</code>


#### VolumeButtonDirection

<code>'up' | 'down'</code>

</docgen-api>
