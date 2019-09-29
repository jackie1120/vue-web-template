export default [
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/layout/common.vue'),
    redirect: '/news/list',
    children: [
      {
        path: 'list',
        name: 'news-list',
        component: () => import('@/views/news/list.vue'),
        meta: { title: '新闻列表' }
      },
      {
        path: 'edit',
        name: 'news-edit',
        component: () => import('@/views/news/edit.vue'),
        meta: { title: '新闻编辑', auth: true }
      }
    ]
  }
]
