const express = require('express');
const app = express();

app.get('/',(req,res) => res.json({"users": ["userOne", "userTwo", "userThree"]}));
app.listen(process.env.PORT || 80);