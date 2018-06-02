const conversion = {
  hora: 0.04,
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
  let valorFinal = 0.0
  switch (tipo) {
    case 'hora':
      valorFinal = valor * conversion['hora']
      break
    case 'dia':
      valorFinal = valor * conversion['dia']
      break
    case 'mes':
      valorFinal = valor * conversion['mes']
      break
    case 'año':
      valorFinal = valor * conversion['año']
      break
    default:
      valorFinal = valor
      break
  }

  return roundNumber(valorFinal, 2)
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

  return roundNumber(tiempo, 2)
}

/**
 * Redondear numero con decimales solicitados
 *
 * @param {number} rnum numero a ser redondeado
 * @param {number} rlength numero de decimales solicitados
 * @link https://stackoverflow.com/questions/5191088/how-to-round-up-a-number-in-javascript#6675283
 * @returns {number}
 */
function roundNumber(rnum: number, rlength: number): number {
  const newnumber =
    Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength)
  return newnumber
}

export default { timeToDays, daysToTime }
