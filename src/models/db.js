// conexao.js
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const UserModel = require('./UserModel');
const TaskModel = require('./TaskModel');
require("dotenv").config();

async function initialize() {
    // Cria o banco de dados se ele não existir
    const HOST = process.env.MYSQL_HOST;
    const PORTMYSQL = process.env.PORTMYSQL;
    const USER = process.env.MYSQL_USER;
    const PASSWORD = process.env.MYSQL_PASSWORD;
    const DBNAME = process.env.MYSQL_DBNAME;
    const connection = await mysql.createPool({ 
        "host": HOST,
         "port": PORTMYSQL, 
         "user": USER, 
         "password": PASSWORD
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DBNAME}\`;`);

    // Conecta ao banco de dados
    const sequelize = new Sequelize(DBNAME, USER, PASSWORD, { dialect: 'mysql' });

    // Inicializa os modelos
    const User = UserModel(sequelize);
    const Task = TaskModel(sequelize);

    // Sincroniza todos os modelos com o banco de dados
    await sequelize.sync();

    // Exporta os modelos
    return { User, Task };
}

module.exports = initialize();
