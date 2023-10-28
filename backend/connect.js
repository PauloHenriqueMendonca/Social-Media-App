import mysql from "mysql";


export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Paulo123",
  database: "social"
});