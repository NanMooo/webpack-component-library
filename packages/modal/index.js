import ClModal from './Modal.vue'
ClModal.install = (app) => {
  app.component(ClModal.name, ClModal)
}
export const Modal = ClModal
export default ClModal
