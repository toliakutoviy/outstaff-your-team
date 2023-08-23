import express, { Application } from 'express';

import routes from './routes';
import errorHandler from "./middleware/errors";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(routes)

app.use(errorHandler);

app.listen(port, async () => {
    console.log(`⚡Server is running at ${port}`);
});
