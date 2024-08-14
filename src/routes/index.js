const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
        name: "코드그룹 목록",
        path: "/manage/common-code/code-groups",
        component: () => import('../pages/manage/common-code/CodeGroupList.vue')
    },
    {
      name: "공통코드 목록",
      path: "/manage/common-code/codes",
      component: () => import('../pages/manage/common-code/CodeList.vue')
    }
  ]
  export default routes
  