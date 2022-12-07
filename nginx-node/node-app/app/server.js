import express, { application } from "express";
import Utils from "./utils.js";
import Db from "./db.js";

/**
 * This class create the server
 * using ExpressJS and manage
 * the get route "./".
 */
export default class Server{

    /**
     * Instantiate the utils class,
     * the db class and the express.
     */
    constructor(){
        this.server = new express();
        this.utils = new Utils();
        this.db = new Db();
    }    

    /**
     * This method manage the get route "./"
     * When this route is touched, a new random
     * name is generated from Utils class,
     * the name is saved into the people table
     * from Db class and then all the names
     * into the table are getted.
     * These names are formated in html and 
     * sended as response.
     */
    async routes(){            
        // Watch the "./" route
        this.server.get("/", async (req, res)=>{

            // Generate a new random name
            var newName = this.utils.generateRandomName();

            // Insert the new name into table people
            await this.db.insertName(newName);

            // Select all data from people
            var dataFromDb = await this.db.selectNamesFromDb();

            // Parse the data to html
            var dataHtml = dataFromDb.reduce((aculuatedData, singleData)=>{
                return aculuatedData += "<div>" + singleData.id + " - " + 
                                singleData.name + "</div>";
            }, "");
                
            // Add "Full Cycle Rocks" to the response content.
            var content = "<h1>Full Cycle Rocks</h1>";
            content += dataHtml;

            // Response
            res.send( content );
        });
    }

    /**
     * This method should be use to initialize
     * the server. The server will listen the
     * port 3000.
     */
    async init(){
        await this.routes();

        this.server.listen(3000, ()=>{
            console.log("Server successfully mounted.");           
            console.log("Listening port 3000...");
        })
    }

}