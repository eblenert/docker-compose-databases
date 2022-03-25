# Docker compose databases

This is a small utility project for quick setup and init PostgreSQL and MongoDB using [docker-compose](https://docs.docker.com/compose/).

## Prerequisites
Make sure you have docker and docker-compose installed.

## Initial values
Copy `.env.example` to `.env` and set the variables.
> Hint: for multiple databases use `,` as separator. Example: `POSTGRES_DATABASES=db1,db2,db3`.

## Sources
[Dev.to](https://dev.to/bgord/multiple-postgres-databases-in-a-single-docker-container-417l)

[mrts](https://github.com/mrts/docker-postgresql-multiple-databases/blob/master/create-multiple-postgresql-databases.sh)
