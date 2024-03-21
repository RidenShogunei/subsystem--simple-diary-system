import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { relative } from 'path'
 
// 引入
import AutoImport from 'unplugin-auto-import/vite'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ // 使用
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      // 如有用到eslint记得加上写段，没有用到可以忽略
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': relative(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0', //显示当前局域网
    open: false, //是否自动启动浏览器
  },
})