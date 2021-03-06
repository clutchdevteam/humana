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
    methods: {
      encode(data) {
        return Object.keys(data)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&')
      },
      handleSubmit() {
        fetch('/', {
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'contact',
            ...this.form,
          }),
        })
          .then((res, err) => {
            if (res.status === 200) {
              this.responseMessage = "Thanks for reaching out! We'll be in contact shortly!"
              this.responseState = 'success'

              this.form.first_name = ''
              this.form.last_name = ''
              this.form.email = ''
              this.form.phone = ''
            } else {
              this.responseMessage = 'Oops! Looks like something went wrong. Please try again!'
              this.responseState = 'error'
            }
          })
          .catch((e) => console.error(e))
      },
    },
  }
</script>
