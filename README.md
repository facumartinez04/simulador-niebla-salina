# Simulador IoT MQTT · Cámaras de Niebla Salina

Grupo 4 · UAI · Redes y Teleprocesamiento.

- `index.html`: demo estilo Packet Tracer (topología, modo simulación, PDU por capas OSI, CLI, endpoints de la API y push al celular por ntfy).
- `original.html`: versión original del simulador.

## Deploy en Coolify

Crear un recurso desde este repo con build pack **Dockerfile**, puerto **80**.
La demo queda en `/` y la versión original en `/original.html`.

## Local

Abrir `index.html` en el navegador, o:

```bash
docker build -t simulador-niebla . && docker run -p 8080:80 simulador-niebla
```
