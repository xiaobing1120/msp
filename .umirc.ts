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
      exact: true,
      menu: {
        name: '欢迎',
        //icon: 'A'
      },
    },
    {
      path: '/redux',
      component: '@/pages/ReduxPage/index',
      exact: true,
      menu: {
        name: 'ReduxPage',
        //icon: 'B'
      },
    },
    {
      path: '/ts',
      menu: {
        name: 'TsPage',
        //icon: 'C'
      },
      routes: [
        {
          path: 'base',
          component: '@/pages/TsPage/BasePage',
          exact: true,
          menu: {
            name: '基础类型',
            //icon: 'C'
          },
        },
        {
          path: 'variable',
          component: '@/pages/TsPage/VariablePage',
          exact: true,
          menu: {
            name: '变量声明',
            //icon: 'D'
          },
        },
        {
          path: 'interface',
          component: '@/pages/TsPage/InterfacePage',
          exact: true,
          menu: {
            name: '接口',
            //icon: 'D'
          },
        },
      ],
    },
  ],
});
