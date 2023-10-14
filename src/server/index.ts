import express , {Request, Response} from "express"
import cors from "cors"
import globalRouter from "../router"

export default  class Server {
    readonly port: number

    constructor(port: number) {
        this.port = port
    }

    start(){
        const app = express()
        app.use(cors())
        app.use(`/${process.env.VERSION_API}`, globalRouter)
        app.all("*", (req: Request, res: Response)=> {
            res.status(404)
            res.send("Erreur")
        })

        app.listen(this.port, function(){
            console.log("Serveur ok")
        })
    }
}