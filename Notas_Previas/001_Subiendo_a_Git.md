![GitHub](https://img.shields.io/badge/github-repo-blue?logo=github)
![Version Control](https://img.shields.io/badge/version_control-git-critical?logo=git)
![Visual Studio Code](https://img.shields.io/badge/editor-Visual_Studio_Code-blue?logo=visualstudiocode)
![HTML5](https://img.shields.io/badge/html-5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css-3-1572B6?logo=css3&logoColor=white)
![Practice Complete](https://img.shields.io/badge/practice-complete-success?logo=githubactions)
***

## Práctica: **Subiendo tu Primer Proyecto a GitHub**

### **Objetivo**

Aprenderas a crear un repositorio en GitHub y subir tu proyecto (carpeta o archivos) desde Visual Studio Code.

***

### **Requisitos previos**

- Tener una **cuenta de GitHub**.
- Visual Studio Code instalado.
- Git instalado en tu computadora.

***

## **Instrucciones paso a paso**

### **1. Crear y abrir tu proyecto**

- Abre **Visual Studio Code**.
- Crea una carpeta de ejemplo para tu proyecto, o abre la carpeta de un proyecto existente.

***

### **2. Crear un repositorio en GitHub**

- Ingresa a [GitHub](https://github.com) y accede con tu cuenta.
- Da clic en el botón **New** (nuevo repositorio).
- Escribe un **nombre representativo** para tu repositorio.
- Agrega una **descripción** (opcional, pero recomendable).
- Marca la opción **Público** (puedes cambiarlo después).
- Presiona el botón **Create repository**.

***

### **3. Conectar tu proyecto local a GitHub**

- En Visual Studio Code, abre la **terminal**.
- Ejecuta el siguiente comando para inicializar el repositorio local:

```bash
git init
```

- Copia desde la página del repositorio en GitHub la línea que aparece como:

```bash
git remote add origin <URL-de-tu-repositorio>
```

- Pega y ejecuta ese comando en tu terminal.
>>Nota: Necesitaras autentificarte en tu cuenta según el nivel de seguridad configurada, esto solo se hace la primera vez.

***

### **4. Preparar y subir archivos**

- Realiza algún **cambio** en tu proyecto (puedes crear un archivo como `index.html`).
- Verifica el estado de tus archivos con:

```bash
git status
```

- Agrega los archivos nuevos o modificados al seguimiento:
    - Para agregar todo lo que sale en rojo:

```bash
git add .
```

- Verifica de nuevo el estado si lo deseas:

```bash
git status
```

- Realiza un **commit** con mensaje descriptivo:

```bash
git commit -m "Agregué el archivo index.html"
```

- Ahora sube los cambios a GitHub:

```bash
git push
```

- Si es la primera vez que subes, GitHub puede pedir que especifiques la rama principal:

```bash
git push -u origin master
```

(o `main`, según cómo lo nombre GitHub).

***

### **5. Realiza un segundo cambio y repite el proceso**

- Crea una carpeta llamada `css` y un archivo dentro llamado `estilos.css`.
- Repite los comandos:

```bash
git add .
git commit -m "Agregué carpeta css y estilos.css"
git push
```


***

### **6. Verifica tu trabajo**

- Ingresa nuevamente al repositorio en GitHub para revisar que ya aparecen tus archivos y los diferentes commits con los mensajes descriptivos.

***

## **Entrega de la práctica**

- Sube una **captura de pantalla** al LMS donde se vea tu repositorio en GitHub con al menos dos commits diferentes.
- Opcional: Incluye el enlace al repositorio público creado.

***

### **Notas importantes**

- Escribe mensajes descriptivos en los commits, te ayudarán a identificar cambios en el futuro.
- Si tienes dudas en algún paso, vuelve a revisar la transcripción o consulta con el docente.

***

**¡Felicidades! Ahora ya sabes cómo subir y controlar versiones de tus proyectos en GitHub, una habilidad esencial en el área de TI.**
