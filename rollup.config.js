import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'iife',
      name: 'Locales',
      exports: 'default'
    },
    plugins: [typescript(), terser()]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    plugins: [typescript(), terser()]
  }
];

