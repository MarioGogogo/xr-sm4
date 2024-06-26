const path = require('path');
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import deletePlugin from 'rollup-plugin-delete';
import { uglify } from 'rollup-plugin-uglify';
import { name } from './package.json';
import { babel } from '@rollup/plugin-babel';
export default [
  {
    input: 'lib/index.js', // 入口文件
    output: {
      file: 'dist/xr-sm4.js', // 输出文件
      format: 'umd',
      name: 'XrSM4', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        //plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]], //删除所有 console.log 语句
      }),
      // deletePlugin({
      //   targets: 'dist/*',
      // }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
  {
    input: 'lib/index.js', // 入口文件
    output: {
      file: 'dist/xr-sm4.cjs.js', // 输出文件
      format: 'cjs',
      name: 'XrSM4', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
      }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
  {
    input: 'lib/index.js', // 入口文件
    output: {
      file: 'dist/xr-sm4.amd.js', // 输出文件
      format: 'amd',
      name: 'XrSM4', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
      }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
];
