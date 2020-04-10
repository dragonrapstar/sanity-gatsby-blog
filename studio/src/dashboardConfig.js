export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e90f154fdd5cf438b219273',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-747d91xn',
                  apiId: '30990dbc-2a0d-4f4c-8070-7e3ac600075a'
                },
                {
                  buildHookId: '5e90f154802ada79e38bca2e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mvzoto8n',
                  apiId: 'd596071d-5b9a-47e6-8606-9f529486cc04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dragonrapstar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mvzoto8n.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
