const dashboard ={
    path:'/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('@/views/Dashboard.vue'),
            meta: { auth: true},
          },
          {
            path: "tables",
            name: "Tables",
            component: () => import('@/views/Tables.vue'),
            meta: { auth: true},
          },
          {
            path: "billing",
            name: "Billing",
            component: () => import('@/views/Billing.vue'),
            meta: { auth: true},
          },
          {
            path: "todo",
            name: "ToDo",
            component: () => import('@/views/ToDo.vue'),
            meta: { auth: true},
          },
          {
            path: "profile",
            name: "Profile",
            component: () => import('@/views/Profile.vue'),
            meta: { auth: true},
          },
    ],
};

export default dashboard;