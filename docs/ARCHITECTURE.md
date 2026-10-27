# Arquitectura de Nexamed Edu

## Estructura de caroetas

nexamed/
|-- index.html
|-- README.md
|-- docs/
|-- src/
     |-- *.html
     |-- css/
     |-- js/
     |    |-- modulos/
     |    |-- componentes/
     |-- datos
     |__ img/

Las carpetas se crean cuando tienen su primer archivo. 

## Decisiones

1. **JavaScript vanilla, diseñado para migrar a React.**
    - Datos (diccionario, articulos) en JSON, separados de la interfaz.
    - JavaScript en módulos pequeños, cada uno con una sola responsabilidad.
    - Piezas repetidas de la interfaz como funciones reutilizables. 
2. **Rutas relativas siempre** (Github Pages sirve el sition en `/nexamed/`).
    - `index.html`usa rutas que empiezan por `src/`, porque no es código del sitio.
    - Las páginas dentro de `src/`usan rutas sin prefijo y `../index.html`para volver al inicion. 
3. **Nimbres de archivos y carpetas** en español, minúsculas, sin tildes ni espacios.
4. **`docs/` en la raiz**, fuera de `src/`, porque no es código del sitio.
5. **Publicación:** Github Pages desde la rama `main`, carpeta raíz. 