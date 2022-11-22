import * as Components from '../packages'
export * from '../packages'
const install = (app) => {
  Object.keys(Components).forEach((key) => {
    app.use(Components[key])
  })
}
export default {
  install,
  version: require('../package.json').version,
  name: require('../package.json').name,
  ...Components,
}
