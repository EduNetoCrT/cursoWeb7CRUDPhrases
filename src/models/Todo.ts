import { sequelize } from "./../instances/pg";
import {Model, DataTypes} from 'sequelize';

//criar minha interface de contrato;

export interface TodoInstance extends Model{
    id: number;
    title: string;
    done: boolean;
};

//criação do meu model usando a interface TodoInstance;

export const Todo = sequelize.define<TodoInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'todos',
    timestamps: false
})