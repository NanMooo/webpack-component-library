import ClButton from './Button.vue'
ClButton.install = (app) => {
  app.component(ClButton.name, ClButton)
}
export const Button = ClButton
export default ClButton
