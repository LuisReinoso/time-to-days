# time-to-days

Convierte horas, dias, mes, años a dias

### Instalación

```bash
npm install time-to-days
```

### Importando libreria

Puedes importar de la siguiente forma:

```javascript
import tdays from 'time-to-days'
```

Adicionalmente, puedes importar el módulo transpilado desde `dist/lib`:

```javascript
import tdays from 'time-to-days/dist/lib/time-to-days'
```

### Uso

```javascript

let dias = 0.0;

// tiempo a dias
dias = tdays.timeToDays(10, 'hora') // 0.4
dias = tdays.timeToDays(1, 'dia') // 1
dias = tdays.timeToDays(2, 'mes') // 60
dias = tdays.timeToDays(2, 'año') // 730

// si pones el tipo diferente de hora, dia, mes, año
// retorna la misma cantidad
dias = tdays.timeToDays(5, 'tiempo') // 5

// dias a tiempo
dias = tdays.daysToTime(10, 'hora') // 240
dias = tdays.daysToTime(1, 'dia') // 1
dias = tdays.daysToTime(2, 'mes') // 0.7
dias = tdays.daysToTime(2, 'mes') // 0.07
dias = tdays.daysToTime(2, 'año') // 0.01

// si pones el tipo diferente de hora, dias, mes, año
// retorna la misma cantidad
dias = tdays.daysToTime(5, 'tiempo') // 5
```

### Licencia

Licencia MIT. Ver archivo LICENCE
