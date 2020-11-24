const routes = [
  {
    path: '/dashboard/analysis',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis')
      }
    ]
  },
  {
    path: '/dashboard/monitor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Monitor')
      }
    ]
  },
  {
    path: '/dashboard/workplace',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Workplace')
      }
    ]
  },
  {
    path: '/form/basic-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/BasicForm')
      }
    ]
  },
  {
    path: '/form/advanced-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/AdvancedForm')
      }
    ]
  },
  {
    path: '/form/step-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/StepForm')
      }
    ]
  },
  {
    path: '/profile/basic',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/profile/basic')
      }
    ]
  },
  {
    path: '/profile/advanced',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/profile/advanced')
      }
    ]
  },
  {
    path: '/account/center',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/account/Center')
      }
    ]
  },
  {
    path: '/account/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/account/Settings')
      }
    ]
  },
  {
    path: '/result/success',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Success')
      }
    ]
  },
  {
    path: '/result/fail',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Fail')
      }
    ]
  },
  {
    path: '/exception/403',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/403')
      }
    ]
  },
  {
    path: '/exception/404',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/404')
      }
    ]
  },
  {
    path: '/exception/500',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/500')
      }
    ]
  },
  {
    path: '/list/search/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Projects')
      }
    ]
  },
  {
    path: '/list/search/applications',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Applications')
      }
    ]
  },
  {
    path: '/list/search/articles',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Articles')
      }
    ]
  },
  {
    path: '/list/card-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/CardList')
      }
    ]
  },
  {
    path: '/list/basic-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/BasicList')
      }
    ]
  },
  {
    path: '/list/table-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/TableList')
      }
    ]
  },
  {
    path: '/user/login',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Login.vue')
      }
    ]
  },
  {
    path: '/user/register',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Register.vue')
      }
    ]
  },
  {
    path: '/user/register',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Register.vue')
      }
    ]
  },
  {
    path: '/user/registerResult',
    name: 'registerResult',
    props: true,
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/RegisterResult.vue')
      }
    ]
  },
  {
    path: '/button',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Button.vue')
      }
    ]
  },
  {
    path: '/ajax',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Ajax.vue')
      }
    ]
  },
  {
    path: '/avatar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Avatar.vue')
      }
    ]
  },
  {
    path: '/badge',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Badge.vue')
      }
    ]
  },
  {
    path: '/card',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Card.vue')
      }
    ]
  },
  {
    path: '/carousel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Carousel.vue')
      }
    ]
  },
  {
    path: '/chatMessage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ChatMessage.vue')
      }
    ]
  },
  {
    path: '/color',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/color.vue')
      }
    ]
  },
  {
    path: '/dialog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dialog.vue')
      }
    ]
  },
  {
    path: '/editor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Editor.vue')
      }
    ]
  },
  {
    path: '/expansionItem',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ExpansionItem.vue')
      }
    ]
  },
  {
    path: '/form/input',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/Input.vue')
      }
    ]
  },
  {
    path: '/form/form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/Form.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
