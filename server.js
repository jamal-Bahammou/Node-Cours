const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// 🔝 CLEAR THE TERMINAL: --------------------------------------
// console.clear();

// 💻 START HER YOUR WORK: -------------------------------------
// console.log(process.env);

// LUNCH the server to work: -----------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
