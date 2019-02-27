# NASAOD — Practice app — Backend

## Run with Docker

If you have Docker installed, just run the following command:
`docker build -t seniorpreacher/nasaod . && docker run -p 8080:8080 --name nasaod-backend seniorpreacher/nasaod`

## Run without Docker

If you don't have Docker, make sure you have JDK 1.8 and Maven installed. 
Then build and run the app as any SpringBoot application. 
Preferably open it in IntelliJ and setup a Run configuration for it.
