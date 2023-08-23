import {NextFunction, Request, Response} from 'express';
import { TData, DataService } from '../services/data';

class DataController {
    private dataService: DataService;

    constructor() {
        this.dataService = new DataService();
    }

    async getAllData(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data: TData = await this.dataService.getData();
            res.json(data);
        } catch (error) {
            next(error)
        }
    }
}

export default DataController;