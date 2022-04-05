<template>
  <rich-text-renderer :document="content" />
</template>

<script>
  export default {
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="postcss" scoped>
  p,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  code,
  hr {
    @apply mb-5 leading-relaxed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b {
    @apply font-semibold font-display;
  }

  p,
  ol {
    @apply opacity-75;

    & p {
      @apply mb-0;
    }
  }

  ul,
  ol {
    @apply ml-5 opacity-100;

    & li p {
      @apply mb-2;
    }
  }

  ul {
    @apply list-disc;
  }

  ol {
    @apply list-decimal;
  }

  blockquote {
    @apply border-l-2 border-gray-300 pl-4 py-2 ml-2;
  }

  blockquote p {
    @apply mb-0;
  }

  img {
    @apply my-8;
  }

  a {
    @apply underline font-bold;
  }

  @screen lg {
    h2 {
      @apply text-2xl;
    }

    h3 {
      @apply text-xl;
    }

    h4 {
      @apply text-lg;
    }

    img {
      @apply my-12;
    }
  }
</style>
