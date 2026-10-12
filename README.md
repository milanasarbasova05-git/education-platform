# Education Platform

Учебная платформа для подбора лекторов, спикеров и тренеров. Проект реализован на React с использованием Vite.

## Стек и версии

- React 19.x
- Vite 8.x
- Node.js 20.x или выше
- npm 10.x или выше
- CSS Modules (без сторонних UI-библиотек)

## Установка и запуск

1. Клонируйте репозиторий:

   git clone https://github.com/milanasarbasova05-git/education-platform.git
   cd education-platform

2. Установите зависимости:

   npm install

3. Запустите проект в режиме разработки:

   npm run dev

4. Откройте в браузере: http://localhost:5173/

## Сборка для продакшена

   npm run build

Результат сборки появится в папке `dist`.

## Структура папок

    education-platform/
    ├── public/                  # Статические файлы (фото, логотипы)
    ├── src/
    │   ├── components/          # Переиспользуемые компоненты
    │   │   ├── Header/          # Шапка сайта
    │   │   ├── Footer/          # Футер
    │   │   ├── TeacherCard/     # Карточка лектора
    │   │   ├── TariffCard/      # Карточка тарифа
    │   │   ├── PartnerCard/     # Карточка партнёра
    │   │   └── Booking/         # Модальное окно записи
    │   ├── pages/               # Страницы приложения
    │   │   ├── Home/            # Главная
    │   │   ├── About/           # О нас
    │   │   ├── Partners/        # Партнёры
    │   │   ├── Teachers/        # Список лекторов
    │   │   └── TeacherDetail/   # Детальная страница лектора
    │   ├── data/                # Данные
    │   │   └── teachers.js      # Список преподавателей
    │   ├── styles/              # Глобальные стили
    │   │   └── App.module.css
    │   ├── App.jsx              # Главный компонент
    │   ├── main.jsx             # Точка входа
    │   └── index.css            # Глобальные стили
    ├── index.html
    ├── package.json
    └── README.md

## Где лежат данные

- Преподаватели: `src/data/teachers.js`
- Партнёры: `src/pages/Partners/Partners.jsx`
- Фотографии: папка `public/`

## Навигация


- `home` — главная страница
- `partners` — партнёры
- `about` — о нас
- `teachers` — список лекторов
- `teacherDetail` — детальная страница лектора

Состояние навигации хранится в `App.jsx` через `useState`.

## Автор

Милaна Сарбасова, группа 831-73