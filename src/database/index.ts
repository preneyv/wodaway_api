import * as mongoose from "mongoose";


export default class Database{

    readonly pwd

    constructor() {

        this.pwd=process.env.DB_PASSWORD
    }

    init(){
        mongoose.connect(`mongodb+srv://valere:${this.pwd}@cluster0.trq21ej.mongodb.net/?retryWrites=true&w=majority`)
            .then(() => console.log("Connection bdd ok"))
            .catch(err => console.error(err))
    }

}