import path from 'path'
import commonjs from '@rollup/plugin-commonjs';
import tsplugin from 'rollup-plugin-typescript2';

const absoPath = filepath => path.resolve(__dirname, filepath);

export default {
  input: absoPath('src/index.ts'),
  output: {
    file: absoPath('dist/god.js'),
    format: 'umd',
    name: 'god'
  },
  plugins: [
    commonjs(),
    tsplugin()
  ]
}