DROP TABLE IF EXISTS public."InfoCars";

DROP TABLE IF EXISTS public."Cars";

CREATE TABLE public."Cars" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) UNIQUE NOT NULL,
    price NUMERIC(9, 2) NOT NULL,
    type VARCHAR(64) NOT NULL,
    brand VARCHAR(64) NOT NULL,
    "buildDate" DATE NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE public."InfoCars" (
    id SERIAL PRIMARY KEY,
    "CarId" INT,
    title VARCHAR(64) NOT NULL,
    description TEXT NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE,
    CONSTRAINT "InfoCars_CarId_fkey" FOREIGN KEY("CarId") REFERENCES "Cars"(id) ON DELETE CASCADE
);

INSERT INTO
    public."Cars"(name, price, type, brand, "buildDate")
VALUES
(
        'Pontiac Firebird',
        '3200000',
        'sportcar',
        'Pontiac',
        '12-03-1991'
    ),
    (
        'Chevrolet Camaro',
        '3500000',
        'sportcar',
        'Chevrolet',
        '23-11-1968'
    ),
    (
        'Dodge Charger',
        '4500000',
        'sportcar',
        'Dodge',
        '15-07-1993'
    ),
    (
        'Chevrolet Impala',
        '3900000',
        'hardtop sedan',
        'Chevrolet',
        '29-09-1965'
    ),
    (
        'Ford Focus',
        '1600000',
        'hatchback',
        'Ford',
        '05-08-2019'
    );

INSERT INTO
    public."InfoCars"("CarId", title, description)
VALUES
(
        1,
        'Двигатель',
        '5.7 литра с системой «TPI» (Tuned Port Injection) формата V8 и мощностью 230 лошадиных сил'
    ),
    (1, 'Коробка передач', 'автоматическая TH-700R4'),
    (
        1,
        'Кузов',
        'удлиненная передня часть, фары в опущенном состоянии полностью закрываются бампером'
    ),
    (
        2,
        'Двигатель',
        'восьмицилиндровый V-образный 6,5-литровый мотор мощностью 325л. с.'
    ),
    (2, 'Коробка передач', 'механическая'),
    (
        2,
        'Кузов',
        'капот с имитацией вентиляционных отверстий сверху, эмблема SS на решётке радиатора и окантовку передней части капота и крыльев'
    ),
    (
        3,
        'Двигатель',
        '5.7 литра с системой «TPI» (Tuned Port Injection) формата V8 и мощностью 230 лошадиных сил'
    ),
    (3, 'Коробка передач', 'автоматическая TH-700R4'),
    (
        3,
        'Кузов',
        'удлиненная передня часть, фары в опущенном состоянии полностью закрываются бампером'
    ),
    (
        4,
        'Двигатель',
        '5.7 литра с системой «TPI» (Tuned Port Injection) формата V8 и мощностью 230 лошадиных сил'
    ),
    (4, 'Коробка передач', 'автоматическая TH-700R4'),
    (
        4,
        'Кузов',
        'удлиненная передня часть, фары в опущенном состоянии полностью закрываются бампером'
    ),
    (
        5,
        'Двигатель',
        '5.7 литра с системой «TPI» (Tuned Port Injection) формата V8 и мощностью 230 лошадиных сил'
    ),
    (5, 'Коробка передач', 'автоматическая TH-700R4'),
    (
        5,
        'Кузов',
        'удлиненная передня часть, фары в опущенном состоянии полностью закрываются бампером'
    );