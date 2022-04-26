import { createServer } from "miragejs"
import data from './assets/data.json'

createServer({
    routes() {
        this.namespace = "api"

        this.get("/jobs", () => {
            return data
        })
    },
})
