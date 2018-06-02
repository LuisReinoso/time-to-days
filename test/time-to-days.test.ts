import tdays from '../src/time-to-days'

describe('Conversion de tiempo a dias', () => {
  it('Deberia convertir horas a dias', () => {
    expect(tdays.timeToDays(10, 'hora')).toBe(0.41666666666666663)
  })

  it('Deberia convertir dias a dias', () => {
    expect(tdays.timeToDays(1, 'dia')).toBe(1)
  })

  it('Deberia convertir meses a dias', () => {
    expect(tdays.timeToDays(2, 'mes')).toBe(60)
  })

  it('Deberia convertir años a dias', () => {
    expect(tdays.timeToDays(2, 'año')).toBe(730)
  })

  it('Deberia retornar valor si el tipo no existe', () => {
    expect(tdays.timeToDays(5, 'tiempo')).toBe(5)
  })
})

describe('Conversion de dias a tiempo', () => {
  it('Deberia convertir dias a horas', () => {
    expect(tdays.daysToTime(10, 'hora')).toBe(240)
  })

  it('Deberia convertir dias a dias', () => {
    expect(tdays.daysToTime(1, 'dia')).toBe(1)
  })

  it('Deberia convertir dias a meses', () => {
    expect(tdays.daysToTime(2, 'mes')).toBe(0.06666666666666667)
  })

  it('Deberia convertir dias a años', () => {
    expect(tdays.daysToTime(2, 'año')).toBe(0.005479452054794521)
  })

  it('Deberia retornar valor si el tipo no existe', () => {
    expect(tdays.daysToTime(5, 'tiempo')).toBe(5)
  })
})
