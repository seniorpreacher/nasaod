# NASAOD — Practice app — Frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run with Docker

If you have Docker installed, just run the following commands

### 1. Build image

`docker build -t seniorpreacher/nasaod-frontend .`

### 2. Run the container

`docker run -p 4200:4200 --name nasaod-frontend seniorpreacher/nasaod-frontend`

When running it for the second or later time, you can remove the previous container by running `docker rm nasaod-frontend`.
