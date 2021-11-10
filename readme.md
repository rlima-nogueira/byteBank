<h1 align="center">Bytebank</h1>

A ideia deste projeto surgiu a partir de aulas assistidas na plataforma [Alura](https://www.alura.com.br/formacao-angular) na formação Angular, tanto que o nome permaneceu o mesmo de algum dos cursos (não lembro qual).

### Frontend ###
* Angular 11
* Angular Material 11
* Firebase 8
* Fontawesome 0.5.0

### Backend ###
* Java (11) Spring Boot 
* Lombok
* Swagger

Esse projeto conta com Dockerfile tanto no frontend quanto no backend, para utilizar você precisar ter o [Docker](https://www.docker.com/get-started) instalado em sua máquina. 

Startar a aplicação pelo Docker: 

```mvn clean package``` </br>

```docker-compose build ``` </br>
```docker-compose up ```

### BUGFIX ###
[X] Ajustar a imagem do dockerfile no backend para conseguir consumir a aplicação de forma correta
- Solução: Estava mapeando a porta errada. 

> A sintaxe pra fazer o bind de porta entre container e host é "porta-no-host:porta-no-container" então se você trocar "8080:80" para "8080:8080" a aplicação deve tá disponível em localhost:8080"


