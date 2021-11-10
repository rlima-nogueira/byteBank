#Criando uma imagem node para rodar o angular
FROM node:13-alpine as angular
LABEL Rafaela Lima Nogueira
#Diretório '/app' dentro da imagem
WORKDIR /app
#Copiando o package.json pra dentro do diretorio
COPY ./frontend/package.json /app
#Rodando npm install para ficar com a node_modules e o package.json
#Silent para não ficar dando todos aqueles logs
RUN npm install --silent
#Copia o restante do projeto para dentro da pasta
COPY ./frontend .
#builda a imagem
RUN npm run build


FROM nginx:alpine
#criando um volume a partir da pasta
VOLUME /var/cache/nginx
COPY --from=angular app/dist/ByteBank /usr/share/nginx/html
COPY ./frontend/config/nginx.conf /etc/nginx/conf.d/default.conf


#docker build -t rlimanogueira/front-bytebank .
#docker run -d -p 80:80/tcp --name front-bytebank rlimanogueira/front-bytebank
