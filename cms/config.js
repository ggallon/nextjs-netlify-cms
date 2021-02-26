export default {
  cms_manual_init: true,
  publish_mode: 'editorial_workflow',
  show_preview_links: true,
  backend: {
    name: 'github',
    repo: 'ggallon/nextjs-netlify-cms',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          show_preview_links: 'preview-home',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'seminars',
      label: 'live/seminars',
      folder: 'content/pages/live/seminars',
      create: true,
      slug: '{{permalink}}',
      preview_path: '/live/seminars/{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: ''
        },
        {
          label: 'Category',
          name: 'category',
          widget: 'hidden',
          default: 'live'
        },
        {
          label: 'Permalink',
          name: 'permalink',
          widget: 'string'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        },
      ]
    }
  ],
};
