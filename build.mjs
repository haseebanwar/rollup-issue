import { rollup } from 'rollup';
import { rollupInput, rollupOutputs } from './options.mjs';

async function build() {
  try {
    const bundle = await rollup(rollupInput);

    for (const output of rollupOutputs) {
      await bundle.write(output);
    }
  } catch (error) {
    console.log('error', error);
  } finally {
    process.exit();
  }
}

build();
