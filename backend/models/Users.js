import {DataTypes, Model} from "sequelize";
import md5 from "md5";
import db from "../services/db";

class Users extends Model {

  static passwordHash = (pass) => {
    return md5(md5(pass + '_unHackable'))
  }
}

Users.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(val) {
      this.setDataValue('password', Users.passwordHash(val))
    },
    get() {
      return undefined;
    }
  },
}, {
  sequelize: db,
  tableName: 'users',
  modelName: 'users',
});

export default Users;
