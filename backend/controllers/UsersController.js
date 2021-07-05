import jwt from "jsonwebtoken";
import Users from "../models/Users";
const {JWT_SECRET} = process.env;

class UsersController {
  static myInfo = async (req, res, next) => {
    try {
      const user = await Users.findByPk(req.userId);

      res.json({
        success: true,
        data: {
          user
        }
      });
    } catch (e) {
      next(e);
    }
  }

  static register = async (req, res, next) => {
    try {
      const {
        fullName, email, password
      } = req.body;

      const user = await Users.create({
        fullName, email, password
      });

      const rUser = await Users.findOne({
        where: {email}
      })

      res.json({
        success: true,
        data: {
          rUser
        }
      });
    } catch (e) {
      next(e);
    }
  }

  static login = async (req, res, next) => {
    try {
      const {email, password} = req.body;

      const user = await Users.findOne({
        where: {
          email,
        },
      });

      if (!user || user.getDataValue('password') !== Users.passwordHash(password)) {
        return res.status(403).json({
          success: false,
          error: {
            message: 'invalid email or password'
          }
        })
      }
      const token = jwt.sign({userId: user.id}, JWT_SECRET);

      res.json({
        success: true,
        data: {
          user,
          token
        }
      });
    } catch (e) {
      next(e);
    }
  }
}

export default UsersController;


