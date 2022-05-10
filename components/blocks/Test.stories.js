import Test from "~/components/blocks/Test.vue";

export default {
  title: "blocks/Test",
};

export const Default = (args) => ({
  components: {
    Test,
  },
  props: Object.keys(args),
  computed: {
    block() {
      return {
        label: this.label,
        size: this.size,
        color: this.color,
      };
    },
  },
  template: `
  <div class="flex justify-center items-center h-screen w-auto">
  <Test :block="block" />
  </div>
  `,
});

Default.argTypes = {
  label: {
    control: "text",
  },
  size: {
    control: {
      type: "select",
      options: ["h1", "h2", "h3", "h4"],
    },
  },
  color: {
    control: {
      type: "select",
      options: ["blue", "green", "red"],
    },
  },
};

Default.args = {
  label: "We testin yo",
  size: "h1",
  color: "blue",
};
