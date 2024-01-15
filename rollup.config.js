// 参考链接： https://juejin.cn/post/7313557322596171815
import { defineConfig } from 'rollup'
import autoprefixer from 'autoprefixer'
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
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: ['@vue/babel-plugin-jsx'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [autoprefixer()],
    }),
    terser(),
  ],
  external: ['vue'],
})
