import BaseService from "./base";
import {requestData1, requestData2, requestData3,} from '../../api';


export type TData = { [key: string]: any[] };
export class DataService extends BaseService {

    async getData(): Promise<TData> {
        try {
            const [data1, data2, data3] = await Promise.all([
                requestData1(),
                requestData2(),
                requestData3(),
            ]);
            return {data1, data2, data3};
        } catch (error) {
            //There should be another handler, but example doesnt return any errors in reject() so im leaving it this way
            throw new Error('Error with fetching data')
        }
    }
}

