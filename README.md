# @capgo/volume-buttons

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
