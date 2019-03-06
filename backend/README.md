# NASAOD — Practice app — Backend

## Run with Docker

If you have Docker installed, just run the following commands

### 1. Package

`./mvnw package`

### 2. Build image

`docker build -t seniorpreacher/nasaod . `

### 3. Run the container

` docker run -p 8080:8080 --name nasaod-backend seniorpreacher/nasaod`

## Run without Docker

If you don't have Docker, make sure you have JDK 1.8 and Maven installed. 
Then build and run the app as any SpringBoot application. _(ex: package, make jar, run)_

Preferably open it in IntelliJ and setup a Run configuration for it.
