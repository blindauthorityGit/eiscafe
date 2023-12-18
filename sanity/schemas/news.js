export default {
  name: 'news',
  title: 'News Article',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The headline of the news article.',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
      description: 'The main text content of the news article.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image associated with the news article.',
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      default: true,
      description: 'Whether the news article is visible or not.',
    },
  ],
}
