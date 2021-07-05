import express from 'express';
import multer from 'multer';
import UsersController from '../controllers/UsersController';

import TableController from "../controllers/TableController";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });
router.get('/todos', TableController.getTodos);

router.post('/todos', TableController.createTodo);

router.put('/todos', TableController.updateTodo);

router.delete('/todos/:id', TableController.deleteTodo);

router.post('/login', UsersController.login);

router.post('/register', UsersController.register);

router.get('/users', UsersController.myInfo);

// router.get('/', UsersController.myAccount);


export default router;






