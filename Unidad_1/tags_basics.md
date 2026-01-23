

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Web](https://img.shields.io/badge/Web-Basics-blue?style=for-the-badge)
![FrontEnd](https://img.shields.io/badge/Front--End-Learning-green?style=for-the-badge)

---
# Etiquetas HTML básicas
## 1. Estructura del documento

- `<!DOCTYPE html>`: Indica que el documento usa HTML5.  
- `<html>...</html>`: Envuelve todo el contenido de la página.  
- `<head>...</head>`: Contiene metadatos, título, enlaces a CSS, etc.  
- `<title>...</title>`: Título que se ve en la pestaña del navegador.  
- `<body>...</body>`: Todo el contenido visible de la página.

### Ejemplo mínimo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <!-- contenido visible -->
  </body>
</html>
```
## Texto y encabezados
```html
<h1> ... </h1> a <h6> ... </h6>: Encabezados (título principal a subtítulos).

<p> ... </p>: Párrafo de texto.

<br>: Salto de línea.

<strong> ... </strong>: Texto en negritas con énfasis semántico.

<em> ... </em>: Texto en cursiva con énfasis.

<span> ... </span>: Fragmento en línea para aplicar estilo a una parte del texto.
```
## Enlaces, imágenes y listas

```html
<a href="url">Texto del enlace</a>: Hipervínculo.

<img src="ruta" alt="texto alternativo">: Imagen.

<ul>...</ul>: Lista desordenada (con viñetas).

<ol>...</ol>: Lista ordenada (numerada).

<li>...</li>: Elemento de lista.
```
## Agrupación y estructura semántica
```html
<div>...</div>: Contenedor genérico en bloque.

<header>...</header>: Encabezado de página o sección.

<main>...</main>: Contenido principal del documento.

<footer>...</footer>: Pie de página.

<section>...</section>: Sección temática.

<nav>...</nav>: Área de navegación (menús, enlaces principales).
```
## Formularios básicos
```html
<form>...</form>: Contenedor de formulario.

<input>: Campo de entrada (texto, checkbox, radio, etc., según type).

<label>...</label>: Etiqueta descriptiva de un campo.

<button>...</button>: Botón.
```
![Cheat Sheet Tags](./assets/html5_cheat_sheet_tags.png)
