import express from "express";
import * as fs from 'fs';

const app = express();

app.get("/", (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile('./about.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile('./contact-me.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.use((req, res, next) => {
    fs.readFile('./404.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.status(404).send(data);
    });
});

app.listen(8080, () => {
    console.log('Server running');
});
