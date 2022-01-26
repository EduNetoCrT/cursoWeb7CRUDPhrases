import { Sequelize } from "sequelize";
import dotEnv from 'dotenv';


dotEnv.config();


export const sequelize = new Sequelize(
    'phrases',
    'postgres',
    'Senha@edu9125',
    {
        dialect: 'postgres',
        port: 5432
    }
)


