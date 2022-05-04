
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/newPage', component: () => import('pages/YangiPage.vue') },
      { path: '/ali', component: () => import('pages/Ali.vue') },
      { path: '/xub', component: () => import('pages/XuB.vue') },
      { path: '/chooseus', component: () => import('pages/ChooseUs.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
