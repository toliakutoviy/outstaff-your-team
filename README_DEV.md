## First task(estimate - 2h, spent - 1h15m~)

for current task there should be something simple, one file like: 
```
import express from 'express';
import {
  requestData1,
  requestData2,
  requestData3,
} from './api/index'; // Update the path accordingly

const app = express();
const port = process.env.PORT || 5000;

app.get('/data', async (req, res) => {
  try {
    const dataPromises = [
      requestData1(),
      requestData2(),
      requestData3(),
    ];

    const [data1, data2, data3] = await Promise.all(dataPromises);
    res.json({data1, data2, data3}});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```
but it wont show anything. splited logic into several files, with kinda default structure. everything can be found in `src/`

main point - `src/index.ts`

main endpoint - `localhost:5000/data`

## Second task(estimate - 1h, spent - 15m-20m)
can be found in `unificator.ts`