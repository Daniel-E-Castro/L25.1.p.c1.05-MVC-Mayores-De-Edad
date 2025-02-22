import Cl_vDatos from './Cl_vDatos.js'
import Cl_mDatos from './Cl_mDatos.js'
import Cl_Controlador from './Cl_controlador.js'

export default class index {
  constructor() {
    let vista = new Cl_vDatos()
    let modelo = new Cl_mDatos()
    let controlador = new Cl_Controlador(modelo, vista)
    vista.controlador = controlador
  }
}
