import Table from "../models/Table";

class TableController {

  static createTodo = async (req, res, next) => {
    try {
      const { title, description, status = 'todo' } = req.body

      const todo = await Table.create({
        title, description, status,
      })

      res.json({
        status: 'ok',
        todo,
      })
    } catch (err) {
      next(err)
    }
  }

  static updateTodo = async (req, res, next) => {
    try {
      const { id, status } = req.body

      await Table.update(
        { status },
        { where: { id } })

      const todo = await Table.findByPk(id)

      res.json({
        status: 'ok',
        todo,
      })
    } catch (err) {
      next(err)
    }
  }

  static getTodos = async (req, res, next) => {
    try {

      const todos = await Table.findAll({})

      res.json({
        status: 'ok',
        todos,
      })
    } catch (err) {
      next(err)
    }
  }

  static deleteTodo = async (req, res, next) => {
    try {
      const { id } = req.params

      await Table.destroy({
        where: { id },
      })

      res.json({
        status: 'ok',
        id
      })
    } catch (err) {
      next(err)
    }
  }

}

export default TableController;
