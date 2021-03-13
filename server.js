const express = require('express');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const path = require("path");
const opn = require("opn");
const cors = require('cors')

const CLASSIFIER_API_URL_DEFAULT = 'http://localhost:8000/';
const ARTICLES_API_URL_DEFAULT = 'http://localhost:1337/api/';

const app = express()
DIST_DIR = path.join(__dirname, "./dist")
HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.use(cors());


// app.use('/classifier-api',
//     proxy({
//         target: CURRENT_CLASSIFIER_API_URL,
//         changeOrigin: true,
//         pathRewrite: {
//             '^/classifier-api': '/'
//         }
//     })
// );

// app.use('/articles-api/*',
//     proxy({
//         target: 'http://localhost:1337/api',
//         changeOrigin: true,
//         secure: false,
//         pathRewrite: {
//             '^/articles-api': '/'
//         }
//     })
// );

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});


app.listen(3000);
opn('http://localhost:' + 3000)