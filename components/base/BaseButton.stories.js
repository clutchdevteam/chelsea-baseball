export default {
  title: 'Base components/Button',
}

export const Default = (args) => ({
  props: Object.keys(args),
  data() {
    return {
      clicked: 0,
    }
  },
  computed: {
    buttonText() {
      return this.default
    },
  },
  methods: {
    handleClick() {
      this.clicked++
    },
  },
  template: `
  <div>
    <BaseButton v-bind="$props" @click="handleClick">{{buttonText}}</BaseButton>
    
    <p class="mt-12">Clicked: {{clicked}}</p>
  </div>`,
})

Default.argTypes = {
  default: {
    type: 'string',
  },
  type: {
    control: {
      type: 'select',
      options: ['button', 'submit'],
    },
  },
  theme: {
    control: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
  },
}

Default.args = {
  default: 'Click me',
  type: 'button',
  theme: 'primary',
}
