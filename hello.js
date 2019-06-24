const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
});
