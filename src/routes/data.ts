import express, {NextFunction, Request, Response} from "express";
import Controller from '../controllers/data';

const router: express.Router = express.Router();

const controller = new Controller();
router.route('/').get(controller.getAllData.bind(controller));

export default router


