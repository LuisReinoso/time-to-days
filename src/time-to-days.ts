const tiempoA = {
  hora: 1 / 24,
  dia: 1,
  mes: 30,
  año: 365
}

/**
 * Convierte tiempo a dias
 *
 * @export
 * @param {number} valor Es el valor numerico de una unidad de tiempo
 * @param {string} tipo Es el tipo de unidad de tiempo
 */
function timeToDays(valor: number, tipo: string): number {
  let tiempo = 0.0
  switch (tipo) {
    case 'hora':
      tiempo = valor * tiempoA['hora']
      break
    case 'dia':
      tiempo = valor * tiempoA['dia']
      break
    case 'mes':
      tiempo = valor * tiempoA['mes']
      break
    case 'año':
      tiempo = valor * tiempoA['año']
      break
    default:
      tiempo = valor
      break
  }

  return tiempo
}

const diasA = {
  hora: 24,
  dia: 1,
  mes: 1 / 30, // Numero periodico considerando mes de 30 dias
  año: 1 / 365
}

/**
 * Convierte los dias a los diferentes tiempos
 *
 * @param {number} dias numero de dias
 * @param {string} tipo tiempo al cual debe ser convertido
 * @returns {number}
 */
function daysToTime(dias: number, tipo: string): number {
  let tiempo = 0
  switch (tipo) {
    case 'hora':
      tiempo = dias * diasA['hora']
      break
    case 'dia':
      tiempo = dias * diasA['dia']
      break
    case 'mes':
      tiempo = dias * diasA['mes']
      break
    case 'año':
      tiempo = dias * diasA['año']
      break
    default:
      tiempo = dias
      break
  }

  return tiempo
}

export default { timeToDays, daysToTime }
