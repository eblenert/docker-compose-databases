const databases = _getEnv("MONGO_INITDB_DATABASES").split(",")
const password = _getEnv("MONGO_INITDB_ROOT_PASSWORD")

for (const database of databases) {
    db = db.getSiblingDB(database)
    db.createUser({
        user: database,
        pwd: password, 
        roles: [
            {
                role: "readWrite",
                db: database
            }
        ]
    })
    print(`Creating ${database} database user`)
}
