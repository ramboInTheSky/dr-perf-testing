# Derek Rose Performance Testing
# Installation
### Mac
>For Mac use `brew install k6` to install the binaries

## Windows
>For Windows you can download the [.msi](https://dl.bintray.com/loadimpact/windows/k6-v0.31.1-amd64.msi)

## Docker
>For the docker image you can use `docker pull loadimpact/k6`

# Running the tests
Run the following commands in a terminal
## Local environment
>`k6 run src/performance-tests.js`

## Non-localhost environment
To run against a given environment (`dev`, `test` or `prod`) run the following command and replace the `${environment}`, `${user}` and `${password}` with the environment and login information
>`k6 run -e ENVIRONMENT=${environment} -e USER=${user} -e PASSWORD=${password} src/performance-tests.js`