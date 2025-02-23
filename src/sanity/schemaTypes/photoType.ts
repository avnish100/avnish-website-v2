export const photoType = {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'dateCreated',
        title: 'Date Created',
        type: 'datetime',
        validation: (Rule: any) => Rule.required(),
      },
    ],
    orderings: [
      {
        title: 'Date Created, New',
        name: 'dateCreatedDesc',
        by: [{ field: 'dateCreated', direction: 'desc' }],
      },
    ],
  }