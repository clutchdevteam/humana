<template>
  <div v-editable="block">
    <InteriorTitle :block="block.heading[0]" />

    <div class="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-36 px-6 xl:px-0">
      <div>
        <BaseHeading size="h3" tag="h2" class="mb-4 lg:mb-8">Let's get some basic info</BaseHeading>
        <form class="relative flex flex-col" @submit.prevent="handleSubmit">
          <input class="hidden" type="hidden" name="form-name" value="contact" />

          <div class="grid lg:grid-cols-2 gap-6">
            <BaseInput class="mb-4" v-model="form.first_name" name="first_name" required>
              First Name
            </BaseInput>

            <BaseInput class="mb-4" v-model="form.last_name" name="last_name" type="text" required>
              Last Name
            </BaseInput>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            <BaseInput class="mb-4" v-model="form.email" name="email" required>Email</BaseInput>

            <BaseInput class="mb-4" v-model="form.phone" name="phone" type="tel">Phone</BaseInput>
          </div>

          <BaseSelect
            class="mb-4"
            v-model="form.category"
            name="category"
            :options="options"
            required
          >
            Choose Bootcamp Category
          </BaseSelect>

          <BaseTextarea class="mb-4" v-model="form.question" name="question" :rows="6" required>
            Ask us about machine learning!
          </BaseTextarea>

          <p class="hidden">
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <BaseButton theme="secondary" type="submit">Apply</BaseButton>
          </div>

          <p
            v-if="responseMessage"
            :class="`${
              responseState === 'success' ? 'text-secondary-dark' : 'text-red-700'
            } text-sm absolute bottom-0 mb-[-42px]`"
          >
            {{ this.responseMessage }}
          </p>
        </form>
      </div>

      <div>
        <BaseRichText :content="block.text" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          category: '',
          question: '',
        },
        options: [
          {
            id: 0,
            title: 'machine learning',
          },
          { id: 1, title: 'data science' },
          { id: 2, title: 'other' },
        ],
        responseMessage: null,
        responseState: null,
      }
    },
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
  }
</script>
