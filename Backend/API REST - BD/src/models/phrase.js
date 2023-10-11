import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../instances/pg.js";

export const Phrase = sequelize.define("Phrase", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    author: {
        type: DataTypes.STRING
    },

    txt: {
        type: DataTypes.STRING
    },
},{
    tableName: 'phrases',
    timestamps: false
});