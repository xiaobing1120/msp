import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Ant Design',
    locale: true,
  },
  routes: [
    {
      path: '/',
      component: '@/pages/HomePage/index',
      menu: {
        name: '欢迎',
        icon: 'A',
      },
    },
    {
      path: '/redux',
      component: '@/pages/ReduxPage/index',
      menu: {
        name: 'ReduxPage',
        icon: 'B',
      },
    },
    {
      path: '/ts',
      component: '@/pages/TsPage/index',
      menu: {
        name: 'TsPage',
        icon: 'C',
      },
    },
  ],
});
