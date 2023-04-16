export default {
  name: 'work',
  type: 'document',
  title: 'Work',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'detail',
      type: 'markdown',
      title: 'Detail',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'tag',
      type: 'array',
      title: 'Tag',
      of: [{type: 'string'}],
    },
  ],
}
