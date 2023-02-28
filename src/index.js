const express = require('express');
const cors = require('cors');
const Movies = require('./config');
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.get('/movies', async (req, res) => {
    const users = await Movies.get();
    const data = [];
    users.forEach((user) => {
        data.push({ id: user.id, ...user.data()});
    }
    );
    res.send(data);
});


// save data to firebase
app.post('/movies', async (req, res) => {
    const user = req.body;
    await Movies.add(user);
    res.send(user);
});
// update data to firebase
app.put('/movies/:id', async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    await Movies.doc(id).update(user);
    res.send(user);
});

// delete data from firebase
app.delete('/movies/:id', async (req, res) => {
    const id = req.params.id;
    await Movies.doc(id).delete();
    res.send(id);
});

var bodyParser = require('body-parser');

app.listen(3001, () => {
    console.log('Server running on port 3001');
});