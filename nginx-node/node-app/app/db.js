import { Sequelize } from "sequelize";

/**
 * This class will manage the db_app
 */
export default class Db {
    /**
     * The sequelize is configured
     * to use the table people(id, name)
     */
    constructor() {

        const dbConfig = {
            host: "mysql-server",
            dialect: "mysql"
        };

        const tableName = "people";

        const tableModel = {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };

        const tableOptions = {
            timesTamp: false,
            createdAt: false,
            updatedAt: false
        };

        this.sequelize = new Sequelize(
            'db_app',
            'root',
            'root',
            dbConfig
        );

        this.people = this.sequelize.define(tableName, tableModel, tableOptions);
        
        this.connect().then(() => {
            this.people.sync().then(()=>{});
            this.sequelize.sync().then(() => {
                console.log('People table syncronized successfully!');
            }).catch((error) => {
                console.error('Unable to sync table : ', error);
            });
        });        
    };

    /**
     * Estabilish connection with the db
     */
    async connect() {
        await this.sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    };

    /**
     * This method insert a newName
     * into the table people.
     * @param {String} newName 
     */
    async insertName(newName){

        const newData = await this.people.create({
            name: newName
        });

        await newData.save();
    }

    /**
     * Select all the content from table people
     * @returns The raw content from people table.
     */
    async selectNamesFromDb(){
        const selectConfig = {
            raw: true,
            nest: true
        }

        var peoples = await this.people.findAll(selectConfig);

        return peoples;
    }

    /**
     * This method close the estabilished connection.
     */
    async closeConnection(){
        await this.sequelize.close();
    }
}