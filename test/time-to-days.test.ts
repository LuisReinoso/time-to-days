import timeToDays from '../src/time-to-days'

describe('Conversion de tiempo a dias', () => {
  it('Deberia convertir horas a dias', () => {
    expect(timeToDays(10, 'hora')).toBe(0.4)
  })

  it('Deberia convertir dias a dias', () => {
    expect(timeToDays(1, 'dia')).toBe(1)
  })

  it('Deberia convertir meses a dias', () => {
    expect(timeToDays(2, 'mes')).toBe(60)
  })

  it('Deberia convertir años a dias', () => {
    expect(timeToDays(2, 'año')).toBe(730)
  })

  it('Deberia retornar valor si el tipo no existe', () => {
    expect(timeToDays(5, 'tiempo')).toBe(5)
  })
})
