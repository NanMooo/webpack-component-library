import ClAside from './Aside.vue'
ClAside.install = (app) => {
  app.component(ClAside.name, ClAside)
}
export const Aside = ClAside
export default ClAside
