export interface VolumeButtonsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
