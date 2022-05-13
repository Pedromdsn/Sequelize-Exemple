import express from "express"
import cors from "cors"
import { router } from "./router"
import { db } from "./db"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", router)

db.sync()

app.listen(3333, () => console.log("Server started on port 3333"))

export { app }
