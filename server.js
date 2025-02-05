const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Статические файлы (если есть, например, изображения, стили)
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
  res.send('Привет! Это приложение на Heroku!');
});

app.listen(port, () => {
  console.log(`Приложение запущено на порту ${port}`);
});
