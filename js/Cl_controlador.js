export default class Cl_Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo
    this.vista = vista
  }
  agregarPersona() {
    this.modelo.procesarPersona(this.vista.agregarPersona())
    this.vista.reportePersona(
      this.modelo.contPersonas,
      this.modelo.contPersonasMEdad,
      this.modelo.porcPersonaMEdad()
    )
  }
}
