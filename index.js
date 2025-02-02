const express = require('express');
const cors = require('cors');
const numClassifyRoute = require('./src/route/classifyNumRoutes');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use('/', numClassifyRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});