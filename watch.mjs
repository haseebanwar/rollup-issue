import { watch } from 'rollup';
import { rollupInput, rollupOutputs } from './options.mjs';

async function watchMode() {
  try {
    const watcher = watch({
      ...rollupInput,
      output: rollupOutputs,
    });

    watcher.on('event', (evt) => {
      if (evt.result) {
        evt.result.close();
      }

      if (evt.code === 'ERROR') {
        console.log('Failed to compile');
        console.error(evt.error);
      }
    });
  } catch (error) {
    console.log('error', error);
  }
}

watchMode();
