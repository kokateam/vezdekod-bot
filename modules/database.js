class Database {
    constructor(connection) {
        this.connection = connection
    }

    request(request, params = []) {
        return new Promise( (resolve) => {
            this.connection.query(
                `${request}`,
                params, (error, results) => {
                    if (error) throw error;

                    return resolve(results)
                })
        })
    }

}

module.exports = Database