import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export const rollupInput = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
  ],
};

export const rollupOutputs = [
  {
    dir: 'dist',
    entryFileNames: 'bundle.cjs.js',
    format: 'cjs',
  },
  {
    dir: 'dist',
    entryFileNames: 'bundle.cjs.min.js',
    format: 'cjs',
    plugins: [terser()],
  },
  {
    dir: 'dist',
    entryFileNames: 'bundle.umd.js',
    format: 'umd',
    name: 'test',
    inlineDynamicImports: true,
  },
  {
    dir: 'dist',
    entryFileNames: 'bundle.umd.min.js',
    format: 'umd',
    name: 'test',
    inlineDynamicImports: true,
    plugins: [terser()],
  },
];
