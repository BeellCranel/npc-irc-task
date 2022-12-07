# npc-irc-task

## postgres

- для заполнения таблиц в базе данных используйте `db.sql` файл в корне репозитория

## клонирование репозитория

- в терминале зайдите в директорию, в которой планируете локальный репозиторий проекта и проинициализируйте ее командой `git init`
- клонируйте репозиторий командой `git@github.com:BeellCranel/npc-irc-task.git`

## server

- в терминале, в корневой директории проекта зайтите в директорию `server` и установите зависимости командой `npm install`
- в файле `db.js` в директории `server` укажите ваши параметры для подкючения к postgreSQL
- в терминале, в директории `server` используйте команду `npm run dev` для запуска сервера

### api

- get cars: `http://api/cars/`
- post car: `http://api/cars/`
- delete car: `http://api/cars/:id`
- get infoCars: `http://api/info-cars/`
- post infoCars: `http://api/info-cars/`
- delete infoCars: `http://api/info-cars/:id`

## client

- в терминале, в корневой директории проекта зайтите в директорию `client` и установите зависимости командой `npm install`
- в терминале, в директории `client` используйте команду `npm run start` для запуска клиента
- если склиент не запустился сам в браузере, то перейдете по ссылке [http://localhost:3000/](http://localhost:3000/)
