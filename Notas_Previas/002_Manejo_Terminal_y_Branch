![Terminal](https://img.shields.io/badge/terminal-uso_ esencial-blue?logo=windowsterminal)
![Git Branches](https://img.shields.io/badge/branches-git_branches-important?logo=git)
![GitHub](https://img.shields.io/badge/github-vinculado-success?logo=github)
![Commit History](https://img.shields.io/badge/commits-historial_ rastreado-green?logo=git)
![Practice Complete](https://img.shields.io/badge/practice-branch_management-success?logo=githubactions)

***

# Práctica: **Comandos Básicos de Git y Manejo de Branches usando la Terminal**

## **Objetivo**

Dominar los comandos principales de Git para gestión de proyectos desde la terminal, incluyendo la creación y manejo de ramas (branches) y la vinculación con GitHub.

***

## **Instrucciones detalladas**

### **1. Instala Git**

- Abre tu navegador y busca “Git Download”.
- Descarga e instala Git según tu sistema operativo (Windows, macOS, Linux).


### **2. Verifica la instalación**

- Abre la terminal o línea de comandos.
- Escribe:

```bash
git --version
```

- Debes ver la versión instalada de Git.


### **3. Configura tu nombre y correo**

- En la terminal:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```


### **4. Crea una carpeta de proyecto**

- Crea una carpeta llamada `mi-primer-repo-git` (usa guiones en vez de espacios).
- Ve a esa carpeta desde la terminal:

```bash
cd ruta/de/mi-primer-repo-git
```


### **5. Inicializa el repositorio local**

- Ejecuta:

```bash
git init
```


### **6. Crea y agrega archivos**

- Crea un archivo `index.html` (puedes usar el bloc de notas, VS Code, o el siguiente comando):

```bash
echo "Hola mundo" > index.html
```

- Agrega los archivos al repositorio:

```bash
git add .
```


### **7. Realiza tus primeros commits**

- Haz tu primer commit:

```bash
git commit -m "Primer commit: index.html creado"
```

- Haz modificaciones al archivo y realiza un segundo commit:

```bash
echo "<h1>Hola mundo</h1>" >> index.html
git add .
git commit -m "Modificación: agregado título a index.html"
```


### **8. Visualiza el historial de commits**

- Muestra los commits realizados:

```bash
git log
```


### **9. Crea y cambia de ramas**

- Crea una nueva rama llamada `feature-nueva`:

```bash
git branch feature-nueva
```

- Cambia a esa rama:

```bash
git switch feature-nueva
```

- Haz cambios en el archivo y realiza un nuevo commit:

```bash
echo "<p>Desarrollando en rama feature-nueva</p>" >> index.html
git add .
git commit -m "Agregado párrafo en rama feature-nueva"
```


### **10. Cambia entre ramas y observa los cambios**

- Cambia de nuevo a la rama `master`:

```bash
git switch master
```

- Observa cómo tu archivo cambia según la rama.


### **11. Sube tu proyecto a GitHub**

- Crea un repositorio en GitHub llamado `mi-primer-repo-git`.
- Vincula el repositorio local:

```bash
git remote add origin https://github.com/tuusuario/mi-primer-repo-git.git
```

- Sube la rama principal (`master` o `main`):

```bash
git push -u origin master
```

- Sube la nueva rama:

```bash
git push -u origin feature-nueva
```


***