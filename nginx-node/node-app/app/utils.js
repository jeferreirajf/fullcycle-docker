/**
 * This is just a auxiliary class
 * that implements a method that 
 * generate a random name from a 
 * hard coded list.
 */
export default class Utils{
    constructor(){

    }

    /**
     * Generate a random name from a 
     * hard coded list.
     * @returns The random generated name.
     */
    generateRandomName() {
        var possibleNames = [
            "Joao",
            "Jose",
            "Antonio",
            "Maria",
            "Julieta",
            "Romeu",
            "Wesley",
            "Genevaldo",
            "Dorgival",
            "Claudio",
            "Arnaldo",
            "Camila",
            "Gabriela",
            "Gabriel",
            "Gustavo",
            "Antonidas"
        ];

        return possibleNames[Math.floor(Math.random() * possibleNames.length)];
    };
}