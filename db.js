import mysql from "mysql"
export const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Gauri@7612",
    database:"blog"

})