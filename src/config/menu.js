const menuJson = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '前端',
    path: '/tech',
    children: [
      {
        name: 'JS',
        path: '/tech',
      },
      {
        name: 'CSS',
        path: '/tech',
      },
      {
        name: 'HTML',
        path: '/tech',
      }
    ]
  },
  {
    name: '日常',
    path: '/life'
  }
];

export default menuJson;
