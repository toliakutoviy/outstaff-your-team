import express from 'express';
import dataRoutes from "./data";

const router: express.Router = express.Router();

router.use('/data', dataRoutes);
export default router;