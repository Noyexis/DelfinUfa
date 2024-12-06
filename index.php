<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset='utf-8'>
        <link rel="stylesheet" href="./formStyle.css">
        <title>Стоматология Дельфин, г. Уфа</title>
    </head>
    <body>
        <div class="background">
            <div class="main">
                <div class="openRequestFormButtonContainer">
                    <div class="openRequestFormButton backgroundBlue borderRound textCenter textWhite textNormal disableSelect">
                        Записаться
                    </div>
                </div>
                <div class="requestFormBlur">
                    
                </div>
                <div class="requestFormContainer">
                    <div class="requestForm backgroundMagenta">
                        <div class="nameInputContainer">
                            <input type="text" class="nameInput textWhite textSmall backgroundBlue borderRound" placeholder="Введите имя">
                        </div>
                        <div class="phoneInputContainer">
                            <input type="tel" class="phoneInput textWhite textSmall backgroundBlue borderRound" placeholder="Введите номер телефона">
                        </div>
                        <div class="descriptionInputContainer">
                            <textarea name="description" class="descriptionInput textWhite textSmall backgroundBlue borderRound" placeholder="Введите Ваши пожелания"></textarea>
                        </div>
                    </div>
                    <div class="requestFormButtons">
                        <div class="cancelButton textWhite textSmall backgroundBlue borderRound disableSelect">
                            Отмена
                        </div>
                        <div class="submitButton textWhite textSmall backgroundBlue borderRound disableSelect">
                            Отправить
                        </div>
                    </div>
                </div>
                <div class="mapContainer">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </body>
    <script src="https://api-maps.yandex.ru/v3/?apikey=de19fb8f-309c-4f50-ad92-2521407550e9&lang=ru_RU"></script>
    <script>
    initMap();
    async function initMap()
    {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;
        const map = new YMap(document.getElementById('map'),
        {
            location:
            {
                center: [55.984784, 54.694433],
                zoom: 15
            },
            className: "mapObject"
        });
        map.addChild(new YMapDefaultSchemeLayer());
        map.addChild(new YMapDefaultFeaturesLayer());
        const {YMapDefaultMarker} = (await ymaps3.import('@yandex/ymaps3-markers@0.0.1'));
        const myPlacemark = new YMapDefaultMarker({
            "coordinates": [55.984784, 54.694433],
            "color": "rgb(0, 185, 255)",
            "title": "Дельфин",
            "subtitle": "Стоматология"
        });
        map.addChild(myPlacemark);
    };
    </script>
    <script src="./jquery-3.6.0.js"></script>
    <script src="./form.js"></script>
</html>