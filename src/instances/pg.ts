import { Sequelize } from "sequelize";
import dotEnv from 'dotenv';


dotEnv.config();


export const sequelize = new Sequelize(
    'node_todo_simples',
    'postgres',
    'Senha@edu9125',
    {
        dialect: 'postgres',
        port: 5432
    }
)


