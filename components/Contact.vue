<template>
  <div v-editable="block" class="w-full">
    <InteriorTitle :block="block.title[0]" />

    <section class="desktop-container my-24 lg:my-32">
      <div class="grid lg:grid-cols-2 gap-12">
        <BaseRichText :content="block.body" />

        <form class="relative" @submit.prevent="handleSubmit">
          <input
            class="hidden"
            type="hidden"
            name="form-name"
            value="Contact"
          />

          <div class="flex flex-col space-y-6">
            <BaseInput v-model="form.name" label="Name" name="name" required />

            <BaseInput
              v-model="form.email"
              label="Email"
              name="email"
              type="email"
              required
            />

            <BaseInput
              v-model="form.phone"
              label="Phone"
              name="phone"
              type="tel"
            />

            <BaseTextarea
              class="mb-8"
              label="Message"
              name="message"
              :rows="6"
              v-model="form.message"
              required
            />

            <p class="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div class="relative">
              <BaseButton class="mb-2" theme="secondary" type="submit">
                Send a Message
              </BaseButton>

              <p
                v-if="responseMessage"
                :class="`${
                  responseState === 'success'
                    ? 'text-green-600'
                    : 'text-red-700'
                } text-sm`"
              >
                {{ this.responseMessage }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import InteriorTitle from "~/components/blocks/InteriorTitle.vue";

export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      responseMessage: null,
      responseState: null,
    };
  },
  components: { InteriorTitle },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "Contact",
          ...this.form,
        }),
      })
        .then((res, err) => {
          if (res.status === 200) {
            this.responseMessage =
              "Thanks for reaching out! We'll be in contact shortly!";
            this.responseState = "success";

            this.form.name = "";
            this.form.email = "";
            this.form.phone = "";
            this.form.message = "";
          } else {
            this.responseMessage =
              "Oops! Looks like something went wrong. Please try again!";
            this.responseState = "error";
          }
        })
        .catch((e) => console.error(e));
    },
  },
};
</script>
