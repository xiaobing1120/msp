import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  routes: [
    { path: '/', component: '@/pages/HomePage/index' },
    { path: '/redux', component: '@/pages/ReduxPage/index' },
  ],
});
