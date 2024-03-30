const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      name: "공통코드목록",
      path: "/manage/common-code/codes",
      component: () => import('../pages/manage/common-code/CodeList.vue')
    }
  ]
  export default routes
  