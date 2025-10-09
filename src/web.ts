import { WebPlugin } from '@capacitor/core';

import type { VolumeButtonsPlugin } from './definitions';

export class VolumeButtonsWeb extends WebPlugin implements VolumeButtonsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
