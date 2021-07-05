import {DataTypes, Model} from "sequelize";
import db from "../services/db";

class Table extends Model {}

Table.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT(),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('todo', 'process', 'done'),
    allowNull: false,
  }
}, {
  sequelize: db,
  tableName: 'todos',
  modelName: 'todos',
});

export default Table;
