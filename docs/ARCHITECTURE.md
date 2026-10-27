# Arquitectura de NexaMed Edu

## Estructura de carpetas

```text
nexamed/
├── index.html
├── README.md
├── docs/
│   ├── ARCHITECTURE.md
│   └── MVP.md
└── src/
    ├── *.html
    ├── css/
    │   └── estilos.css
    ├── fuentes/
    │   ├── montserrat-v31-latin-600.woff2
    │   ├── montserrat-v31-latin-700.woff2
    │   ├── roboto-v51-latin-regular.woff2
    │   └── roboto-v51-latin-700.woff2
    ├── js/
    │   ├── modulos/
    │   └── componentes/
    ├── datos/
    └── img/
```

Las carpetas se crean cuando necesitan su primer archivo.

## Decisiones de arquitectura

1. **JavaScript vanilla, preparado para una posible migración a React.**
   - Los datos, como el diccionario y los artículos, se almacenan en archivos JSON separados de la interfaz.
   - El JavaScript se organiza en módulos pequeños, cada uno con una sola responsabilidad.
   - Las piezas repetidas de la interfaz se implementan como funciones reutilizables.
   - React se incorporará únicamente si las necesidades reales del proyecto lo justifican.

2. **Rutas relativas siempre.**
   - GitHub Pages publica el sitio en `/nexamed/`.
   - `index.html` utiliza rutas que comienzan por `src/` para acceder a los recursos del sitio.
   - Las páginas dentro de `src/` utilizan rutas relativas a esa carpeta y `../index.html` para volver al inicio.
   - Las rutas de recursos declaradas en CSS se calculan desde la ubicación del archivo CSS.

3. **Nombres de archivos y carpetas.**
   - Se utilizan nombres en español, en minúsculas, sin tildes ni espacios.
   - Se permiten extensiones y nombres técnicos convencionales cuando corresponda, como `.html`, `.css`, `.js` y `.json`.

4. **Documentación separada del código del sitio.**
   - `docs/` se mantiene en la raíz del repositorio, fuera de `src/`.
   - `MVP.md` define el alcance funcional de la versión alfa.
   - `ARCHITECTURE.md` documenta la estructura y las decisiones técnicas.

5. **Publicación.**
   - GitHub Pages publica desde la rama `main`, utilizando la carpeta raíz del repositorio.
   - Los enlaces y recursos deben funcionar tanto en el entorno local como en la URL publicada.

## Identidad visual

Se establece una nueva identidad visual para NexaMed Edu. Este rediseño sustituye la identidad anterior basada en verde, incluidos los diseños antiguos de logotipo e ilustraciones que dependan de esa paleta.

### Paleta de colores

| Color | Código HEX | Uso |
|---|---|---|
| Azul médico | `#0099CC` | Decoración, logotipo e ilustraciones |
| Azul acción | `#006B94` | Enlaces y botones con texto blanco |
| Violeta | `#6C63FF` | Decoración e ilustraciones |
| Violeta acción | `#5A51E8` | Botones y texto de acento |
| Coral | `#E05A38` | Decoración, ilustraciones y destacados |
| Coral acción | `#C23E1E` | Botones y texto de acento |
| Azul profundo | `#0A1929` | Texto principal, títulos y fondos oscuros |
| Gris texto | `#4A5560` | Texto secundario |
| Gris claro | `#F2F5F7` | Fondos de secciones y tarjetas |
| Negro | `#111111` | Elementos neutros |
| Blanco | `#FFFFFF` | Fondos y texto sobre colores de acción |

**Reglas de accesibilidad cromática:**
- Los colores decorativos no se utilizan como fondo de texto pequeño si no ofrecen contraste suficiente.
- Los colores de acción se reservan para combinaciones de texto y fondo con contraste adecuado.
- La información nunca se comunica exclusivamente mediante el color.
- Los colores específicos para avisos y advertencias se definirán cuando se implemente esa necesidad.

### Tipografía

Se utilizan fuentes locales en formato WOFF2, con subconjunto latino:

- **Montserrat 600 y 700:** títulos y encabezados.
- **Roboto 400 y 700:** texto general y elementos que requieran negrita.

Los archivos se almacenan en `src/fuentes/` y se declaran mediante `@font-face` en `src/css/estilos.css`.

El uso de fuentes locales reduce la dependencia de servicios externos para mostrar la tipografía.

## Criterios generales de implementación

- Utilizar HTML semántico, CSS moderno y diseño adaptable a móviles y escritorio.
- Mantener una estructura accesible y una navegación clara.
- Separar contenido, presentación y comportamiento siempre que resulte práctico.
- Mantener los contenidos médicos respaldados por fuentes confiables e indicar su fecha de revisión.
- Diferenciar la educación sanitaria general del diagnóstico y tratamiento individual.
- Evitar recopilar datos médicos personales en la versión alfa.
- No incorporar funcionalidades fuera del alcance documentado en `MVP.md` sin revisar previamente el alcance del proyecto.