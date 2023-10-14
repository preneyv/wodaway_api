import Server from "./server";
import Database from "./database";

import  dotenv from "dotenv"

dotenv.config()
const db = new Database()
db.init()

const server = new Server(3000)
server.start()