const express = require('express');
const cors  = require('cors');
require('dotenv').config();

const {dbConnectMysql} = require('./config/mysql.js');
const dbConnectionNoSql = require('./config/mongo.js');
const ENGINE_DB = process.env.ENGINE_DB

const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLogger.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app,{
    noColors: true,
    stream:loggerStream,
    skip: function(req, res) {
        return res.statusCode < 400
    }
})

const PORT = process.env.PORT || 3000;

// Routes ------------------------------------------------

app.use("/api", require("./routes"));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


(ENGINE_DB === 'nosql') ? dbConnectionNoSql() : dbConnectMysql()