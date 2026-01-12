import express from 'express';
import 'dotenv/config';
import webRoutes from './routes/web';
import getConnection from './config/database';

const app = express();
const port = 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config route
webRoutes(app);

//config static files : images/css/javascript
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
  console.log('env port: ', process.env.PORT);
});
