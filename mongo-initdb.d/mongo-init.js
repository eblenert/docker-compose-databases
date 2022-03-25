const databases = _getEnv("MONGO_INITDB_DATABASES").split(",")

for (const database of databases) {
    print(`Creating ${database} database`)
    db.getSiblingDB(database)
}
