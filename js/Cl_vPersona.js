export default class Cl_vPersona {
  constructor() {
    this.vista = document.getElementById('personaForm')
    this.inNombre = document.getElementById('pNombre')
    this.inEdad = document.getElementById('pEdad')
    this.btAceptar = document.getElementById('btAceptar')
  }

  get nombre() {
    return this.inNombre.value
  }

  get edad() {
    return +this.inEdad.value
  }

  mostrar() {
    this.vista.hidden = false
  }

  ocultar() {
    this.vista.hidden = true
  }
}
