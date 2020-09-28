export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7183770684ae5af7945e08',
                  title: 'Sanity Studio',
                  name: 'testproject-studio',
                  apiId: '5412b917-3f49-48a6-b6fd-9c2507e62ccf'
                },
                {
                  buildHookId: '5f718377a42cb54eb8b35c26',
                  title: 'Blog Website',
                  name: 'testproject-web',
                  apiId: 'fc770db5-a43b-4efb-80bf-8b40c78470af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/testproject',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://testproject-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
