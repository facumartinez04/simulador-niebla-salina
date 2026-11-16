FROM nginx:1.27-alpine
COPY index.html original.html /usr/share/nginx/html/
EXPOSE 80
