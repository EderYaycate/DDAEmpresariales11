# Cartelera (Laboratorio 11: Comunicación entre componentes en ReactJS)

Proyecto acumulativo sobre la cartelera del laboratorio 10.

## Ejecución
```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```
Para ver el estado de error de los estrenos: `http://localhost:5173/?premieres=error` (el botón Reintentar lo resuelve).

## Qué se extrajo y quién lo comparte
| Lógica | Archivo | Componentes que la usan |
|---|---|---|
| Retardo del buscador | `hooks/useDebounce.js` | `Billboard` |
| Tamaño de ventana | `hooks/useWindowSize.js` | `Header`, `MovieGrid`, `PremiereCarousel` |
| Petición simulada con 3 estados | `hooks/usePremieres.js` | `PremiereSection` |
| Datos crudos a modelo de la app | `utils/movieAdapter.js` | `App`, `usePremieres` |

## Dónde vive cada estado
- `query` (filtro): `Billboard`, ancestro común de `Banner`, `SearchBar` y `MovieGrid`.
- `favoriteIds`: `App`, porque lo necesitan `Header` (contador) y las tarjetas (alternar).
- Estado de los estrenos: dentro de `usePremieres`, usado solo por `PremiereSection`.

## Observaciones
- `Header` recibe solo `favoritesCount`, nunca la lista.
- `MovieCard` solo llama a `onToggle`; el aviso (`react-hot-toast`) se decide en `App`.
- Limpiar el filtro desde el banner se aplica sin esperar el retardo, para que buscador, banner y listado no se desincronicen.
