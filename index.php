<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset='utf-8'>
        <link rel="stylesheet" href="./style.css">
        <title>Стоматология Дельфин, г. Уфа</title>
    </head>
    <body>
        <div class="registerContainer">
            <div class="registerForm">
                <div class="title">
                    Оставьте заявку
                </div>
                <div class="nameForm">
                    <div>
                        Ваше имя:
                    </div>
                    <input type="text" class="nameText">
                </div>
                <div class="dataForm">
                    <div>
                        Пожелания:
                    </div>
                    <input type="text" class="dataText">
                </div>
                <div class="button" id="sendRequest">
                    Отправить
                </div>
            </div>
        </div>
        <div id="map" style="width: 600px; height: 400px"></div>
    </body>
    <script src="https://api-maps.yandex.ru/v3/?apikey=de19fb8f-309c-4f50-ad92-2521407550e9&lang=ru_RU"></script>
    <script>
        initMap();

        async function initMap()
      {
          console.log(1);
          await ymaps3.ready;
          const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;
          const map = new YMap
          (
            document.getElementById('map'),
            {
                location:
                {
                  center: [55.984784, 54.694433],
                  zoom: 15
                }
            }
           );
           map.addChild(new YMapDefaultSchemeLayer());
   
          // Добавляем слой объектов
map.addChild(new YMapDefaultFeaturesLayer())

// Подключение модуля меток
  const {YMapDefaultMarker} = (await ymaps3.import('@yandex/ymaps3-markers@0.0.1'));

// Создание метки
const myPlacemark = new YMapDefaultMarker({
  "coordinates": [55.984784, 54.694433],
  "color": "rgb(0, 150, 220)",
  "title": "Дельфин",
  "subtitle": "Стоматология"
});

// Добавление метки на карту
map.addChild(myPlacemark);
        
          console.log(2);
        };
    </script>
    <script src="./jquery-3.6.0.js"></script>
    <script src="./test.js"></script>
</html>