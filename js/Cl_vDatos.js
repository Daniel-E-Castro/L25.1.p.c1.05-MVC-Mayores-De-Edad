import Cl_mPersona from './Cl_mPersona.js'
import Cl_vPersona from './Cl_vPersona.js'

export default class Cl_vDatos {
  constructor() {
    this.controlador = null
    this.mPersona = null
    this.vPersona = new Cl_vPersona()
    this.vista = document.getElementById('mainForm')
    this.table = document.getElementById('mainFormTable')
    this.btAgregar = document.getElementById('btAgregar')
    this.lblcantPersona = document.getElementById('cantPersonas')
    this.lblporcentPersonas = document.getElementById('porcentPersonas')
    this.lblcantPersonasMEdad = document.getElementById('cantPersonasMEdad')
    this.btAgregar.onclick = () => this.ocultar()
    this.vPersona.btAceptar.onclick = () => this.controlador.agregarPersona()
    this.mostrar()
  }
  agregarPersona() {
    this.mPersona = new Cl_mPersona({
      nombre: this.vPersona.nombre,
      edad: this.vPersona.edad,
    })
    this.mostrar()
    return this.mPersona
  }

  mostrar() {
    this.vista.hidden = false
    this.vPersona.ocultar()
  }

  ocultar() {
    this.vista.hidden = true
    this.vPersona.mostrar()
  }

  reportePersona(cantPersonas, cantPersonasMEdad, porcentPersonas) {
    this.table.innerHTML += `
        <tr>
          <td>${this.mPersona.nombre}</td>
          <td>${this.mPersona.edad}</td>
        </tr>
    `
    this.lblcantPersona.innerHTML = cantPersonas
    this.lblcantPersonasMEdad.innerHTML = cantPersonasMEdad
    this.lblporcentPersonas.innerHTML = porcentPersonas
  }
}
