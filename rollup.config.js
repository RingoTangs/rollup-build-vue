// 参考链接： https://juejin.cn/post/7313557322596171815
import { defineConfig } from 'rollup'
import autoprefixer from 'autoprefixer'
import clear from 'rollup-plugin-clear'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'


export default defineConfig({
  input: './src/index.ts',
  output: {
    dir: './dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    clear({ targets: ['dist'] }),
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    postcss({
      extract: true,
      minimize: true,
      plugins: [autoprefixer()],
    }),
    commonjs(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: ['@vue/babel-plugin-jsx'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
  external: ['vue'],
})
