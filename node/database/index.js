import mysql from "mysql";
import { dbConfig } from "./config.js";

let dbConnection = null;
export async function createConnection(){
  console.log("create connection")
  dbConnection = mysql.createConnection(dbConfig);
  return dbConnection;
}

export async function insertName(name){
  const sql = `INSERT INTO people(name) values ('${name}')`;
  return new Promise((resolve, reject)=>{
    dbConnection.query(sql,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
  });
}

export async function getAllNames(){
  const sql = "SELECT * FROM people;"
  return new Promise((resolve, reject)=>{
    dbConnection.query(sql,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
  });
}

export async function closeConnection(){
  console.log("Close connection");
  dbConnection.end();
}