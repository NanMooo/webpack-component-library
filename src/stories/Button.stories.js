import { Button } from './../../lib/index.js'
import './../../lib/styles/index.css'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: {},
    type: {
      default: 'primary',
      control: {
        type: 'select',
      },
      options: ['primary', 'default', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      default: 'small',
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
  },
}

const Template = (args) => ({
  components: { ClButton: Button },
  setup() {
    return { args }
  },
  template: '<cl-button v-bind="args">按钮</cl-button>',
})

export const Large = Template.bind({})

Large.args = {
  type: 'primary',
  size: 'large',
}

export const Default = Template.bind({})
Default.args = {
  type: 'primary',
  size: 'default',
}

export const Small = Template.bind({})
Small.args = {
  type: 'primary',
  size: 'small',
}
