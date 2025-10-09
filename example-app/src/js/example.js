import { Capacitor } from '@capacitor/core';
import { VolumeButtons } from '@capgo/capacitor-volume-buttons';

const ui = {
  start: document.getElementById('startButton'),
  stop: document.getElementById('stopButton'),
  clear: document.getElementById('clearLogButton'),
  log: document.getElementById('logOutput'),
};

let listenerHandle = null;

const formatDetails = (details) => {
  if (details === undefined) return '';
  if (details === null) return 'null';
  if (details instanceof Error) return `${details.message}\n${details.stack ?? ''}`;
  if (typeof details === 'object') {
    try {
      return JSON.stringify(details, null, 2);
    } catch (err) {
      return String(details);
    }
  }
  return String(details);
};

const log = (message, details) => {
  const now = new Date();
  const timestamp = now.toISOString().split('T')[1].replace('Z', '');
  const detailText = details !== undefined ? `\n${formatDetails(details)}` : '';
  const entry = `[${timestamp}] ${message}${detailText}`;

  if (ui.log.textContent.startsWith('Logs will appear here.')) {
    ui.log.textContent = entry;
  } else {
    ui.log.textContent = `${entry}\n\n${ui.log.textContent}`;
  }

  if (details !== undefined) {
    console.log(message, details); // eslint-disable-line no-console
  } else {
    console.log(message); // eslint-disable-line no-console
  }
};

const updateButtons = () => {
  const active = Boolean(listenerHandle);
  ui.start.disabled = active;
  ui.stop.disabled = !active;
};

const startListening = async () => {
  if (listenerHandle) {
    log('Listener already active.');
    return;
  }
  try {
    listenerHandle = await VolumeButtons.addListener('volumeButtonPressed', (event) => {
      log(`Volume button pressed: ${event.direction}`);
    });
    updateButtons();
    log('Listener registered. Press the hardware volume buttons to generate events.');
  } catch (error) {
    log('Failed to register listener.', error);
  }
};

const stopListening = async () => {
  if (!listenerHandle) {
    log('No active listener to remove.');
    return;
  }
  try {
    await listenerHandle.remove();
    await VolumeButtons.removeAllListeners();
    log('Listener removed.');
  } catch (error) {
    log('Failed to remove listener.', error);
  } finally {
    listenerHandle = null;
    updateButtons();
  }
};

ui.start.addEventListener('click', () => {
  startListening().catch((error) => log('Unexpected start error', error));
});
ui.stop.addEventListener('click', () => {
  stopListening().catch((error) => log('Unexpected stop error', error));
});
ui.clear.addEventListener('click', () => {
  ui.log.textContent = 'Logs cleared.';
});

updateButtons();
const platform = Capacitor.getPlatform();
if (platform === 'web') {
  log('Note: VolumeButtons is not supported on web. Deploy to iOS or Android hardware to receive events.');
} else {
  log(`Platform detected: ${platform}. Ready to listen for volume button presses.`);
}
