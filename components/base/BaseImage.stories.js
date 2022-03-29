export default {
  title: 'Base components/Image',
  argTypes: {
    src: 'text',
    alt: 'text',
    width: {
      type: 'select',
      options: ['w-1/4', 'w-1/3', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full'],
    },
  },
  args: {
    src: 'https://source.unsplash.com/random',
    alt: 'Image alt text',
    width: 'w-1/2',
  },
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <div :class="width">
    <BaseImage v-bind="$props" />
  </div>
  `,
})
