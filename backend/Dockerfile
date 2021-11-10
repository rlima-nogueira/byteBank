FROM openjdk:16-alpine3.13
LABEL Rafaela Lima Nogueira

WORKDIR /app
COPY ./backend/.mvn/ .mvn
COPY ./backend/mvnw ./backend/pom.xml ./
RUN ./mvnw dependency:go-offline

COPY ./backend/src ./src
COPY ./backend/target/bytebank-0.0.1-SNAPSHOT.jar ./

ENTRYPOINT [ "java", "-jar", "./bytebank-0.0.1-SNAPSHOT.jar"  ]




#docker build -t rlimanogueira/back-bytebank .
#docker run -d -p 8082:80/tcp --name back-bytebank rlimanogueira/back-bytebank