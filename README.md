# time-to-days

Convierte horas, dias, mes, años a dias

### Instalación

```bash
npm install time-to-days
```

### Importando libreria

Puedes importar de la siguiente forma:

```javascript
import timeToDays from 'time-to-days'
```

Adicionalmente, puedes importar el módulo transpilado desde `dist/lib`:

```javascript
import timeToDays from 'time-to-days/dist/lib/time-to-days'
```

### Uso

```javascript

let dias = 0.0;

dias = timeToDays(10, 'hora') // 0.4
dias = timeToDays(1, 'dia') // 1
dias = timeToDays(2, 'mes') // 60
dias = timeToDays(2, 'año') // 730

// si pones el tipo diferente de hora, dia, mes, año
// retorna la misma cantidad
dias = timeToDays(5, 'tiempo') // 5

```

### Licencia

Licencia MIT. Ver archivo LICENCE
