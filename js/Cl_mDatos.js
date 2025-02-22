export default class Cl_mDatos {
  constructor() {
    this.contPersonas = 0
    this.contPersonasMEdad = 0
  }
  procesarPersona(p) {
    this.contPersonas++
    if (p.edad >= 18) {
      this.contPersonasMEdad++
    }
  }
  porcPersonaMEdad() {
    return (this.contPersonasMEdad / this.contPersonas) * 100
  }
}
