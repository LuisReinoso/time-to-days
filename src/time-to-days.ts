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
export default function timeToDays(valor: number, tipo: string): number {
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

  return valorFinal
}
