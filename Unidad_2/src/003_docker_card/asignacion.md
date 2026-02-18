# HolaDocker

Práctica para crear y ejecutar un contenedor Docker con **Nginx** que sirva una página estática `card.html` usando solo la terminal.

---

## 1. Requisitos previos

### Windows y macOS

1. Descarga Docker Desktop desde la página oficial de Docker según tu sistema operativo.
2. Instala Docker Desktop ejecutando el instalador (`.exe` en Windows, `.dmg` en macOS) y sigue el asistente.
3. Abre Docker Desktop al menos una vez para que el motor de Docker quede disponible en segundo plano.  
4. Verifica la instalación en una terminal o PowerShell:

   ```bash
   docker --version
   ```
   GNU/Linux (ej. Ubuntu)
Instala Docker desde los paquetes de tu distribución, por ejemplo en Ubuntu: 

```bash
sudo apt install docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker
```
Verifica:

```bash
docker --version
```

## 2. Crear el proyecto HolaDocker
Todos los pasos siguientes se hacen desde la terminal.

Crear carpeta del proyecto y entrar en ella:

```bash
mkdir HolaDocker
cd HolaDocker
```
Abrir Visual Studio Code en esta carpeta:

```bash
code .
```

3. Preparar el sitio estático
Dentro de HolaDocker, crear una carpeta para el sitio:

bash
mkdir sitio
Copiar o mover el archivo card.html de la sesión pasada a la carpeta sitio (puedes arrastrarlo en VS Code o usar la terminal, según dónde lo tengas).

Estructura esperada:

```text
HolaDocker/
├── sitio/
│   └── card.html
└── Dockerfile
```
4. Crear el Dockerfile con Nginx
En la raíz de HolaDocker, crear un archivo llamado Dockerfile (sin extensión).

Escribir el siguiente contenido:

 ```text
FROM nginx:latest
```
# Copia el contenido de la carpeta "sitio" al directorio por defecto de Nginx
```docker
COPY sitio/ /usr/share/nginx/html/
```

# Nginx escucha en el puerto 80 dentro del contenedor
```bash
EXPOSE 80

```

Este Dockerfile usa la imagen oficial de Nginx, copia los archivos estáticos al directorio que Nginx sirve por defecto y expone el puerto 80 dentro del contenedor. 

## 3. Construir la imagen Docker
Desde la carpeta HolaDocker (donde está el Dockerfile):

```bash
docker build -t sitioweb:latest .
-t sitioweb:latest asigna nombre y etiqueta a la imagen.
```
El punto (.) indica que el contexto de construcción es la carpeta actual. 

Puedes comprobar que la imagen se creó correctamente:

```bash
docker images
```
## 4. Ejecutar el contenedor (sin usar Docker Desktop GUI)
Para levantar el contenedor que publique el sitio en el puerto 8080 de tu computadora:

```bash
docker run -it --rm -d -p 8080:80 --name web sitioweb
```
### Significado de las opciones: 

* -d: ejecuta el contenedor en segundo plano.

* --rm: elimina el contenedor automáticamente al detenerlo.

* -p 8080:80: mapea el puerto 8080 del host al puerto 80 del contenedor (donde corre Nginx).

* --name web: asigna el nombre web al contenedor.

* sitioweb: imagen que se va a ejecutar.

Ver contenedores en ejecución:

```bash
docker ps
```
Para detener el contenedor:

```bash
docker stop web
```
## 5. Probar el sitio desde el navegador
Con el contenedor en ejecución, abre tu navegador.

Visita:

```text
http://localhost:8080/card.html
```
Deberías ver tu tarjeta card.html servida por Nginx dentro del contenedor Docker. 

```text
undefined
```