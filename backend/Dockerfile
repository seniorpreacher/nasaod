FROM zenika/alpine-maven
VOLUME /tmp

ENV PROJ=/usr/src/app
RUN mkdir -p $PROJ
COPY . $PROJ

RUN mvn package

EXPOSE 8080:8080
ENTRYPOINT ["mvn","spring-boot:run"]
