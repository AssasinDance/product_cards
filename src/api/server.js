import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000
const baseUrl = `http://localhost:${port}`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json(), cors())

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
    res.json([
{
"id": 1,
"title": "Ремень мужской",
"price": 434,
"category": "Аксессуары",
"image": `${baseUrl}/static/images/1.webp`,
"description": "Элегантный мужской кожаный ремень, изготовленный из первоклассной натуральной кожи, является идеальным подарком для вашего любимого мужчины."
},
{
"id": 2,
"title": "Комплект термобелья",
"price": 1341,
"category": "Одежда",
"image": `${baseUrl}/static/images/2.webp`,
"description": "Идеальный выбор для людей, которые ценят качество, надежность и комфорт"
},
{
"id": 3,
"title": "Плоскогубцы",
"price": 793,
"category": "Инструменты",
"image": `${baseUrl}/static/images/3.webp`,
"description": "Комплектация плоскогубцы в сборе"
},
{
"id": 4,
"title": "МОЩНЫЙ РУЧНОЙ ФОНАРЬ",
"price": 938,
"category": "Туризм",
"image": `${baseUrl}/static/images/4.webp`,
"description": "Подарочная коробка; фонарь; кабель USB TYPE-C; ремешок; аккумулятор 26650 1 шт"
},
{
"id": 5,
"title": "Сумка мужская через плечо",
"price": 1679,
"category": "Аксессуары",
"image": `${baseUrl}/static/images/5.webp`,
"description": "Стильно, удобно, практично и не дорого 👍"
},
{
"id": 6,
"title": "Умные, напольные весы с Bluetooth",
"price": 810,
"category": "Техника",
"image": `${baseUrl}/static/images/6.webp`,
"description": "Умные Весы для сопровождения и контроля массы тела. Электронные весы для здоровья и красоты идеальный помощник для контроля веса, процентного содержания жира, воды и мышц, а таже уровень других показателей ведь это умные напольные весы."
},
{
"id": 7,
"title": "Протеиновые батончики",
"price": 629,
"category": "Спорт",
"image": `${baseUrl}/static/images/7.webp`,
"description": "Откройте для себя непревзойденный вкус тропиков с нашими протеиновыми батончиками без сахара со вкусом Кокос!"
},
{
"id": 8,
"title": "Подвеска Обезьянка",
"price": 66,
"category": "Аксессуары",
"image": `${baseUrl}/static/images/8.webp`,
"description": "Эта подвеска в виде обезьяны для автомобиля имеет уникальный дизайн, демонстрирующий модную индивидуальность."
},
{
"id": 9,
"title": "Шейкер с круглым дном",
"price": 439,
"category": "Спорт",
"image": `${baseUrl}/static/images/9.webp`,
"description": "Шейкер для спортивного питания Sports Element – незаменимая вещь для людей, ведущих активный образ жизни."
},
{
"id": 10,
"title": "Чесалка для спины",
"price": 99,
"category": "Здоровье",
"image": `${baseUrl}/static/images/10.webp`,
"description": "Чесалка для спины телескопическая - это уникальный инструмент, который поможет вам расслабиться и отдохнуть после долгого рабочего дня."
},
])
})

app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`)
})