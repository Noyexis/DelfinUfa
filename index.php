<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset='utf-8'>
        <link rel="stylesheet" href="./index.css">
        <title>Стоматология Дельфин, г. Уфа</title>
    </head>
    <body>
        <div id="main" class="corbelL disableSelect">
            <div class="noise">

            </div>
            <div class="header textCenter colorGray">
                <div class="title textLarge">
                    Стоматология Дельфин
                </div>
                <div class="buttonList textMedium">
                    <div class="titleButton">
                        <div class="buttonText">
                            Главная
                        </div>
                        <div class="underline">&nbsp;</div>
                    </div>
                    <div class="titleButton">
                        <div class="buttonText">
                            Услуги
                        </div>
                        <div class="underline">&nbsp;</div>
                    </div>
                    <div class="titleButton">
                        <div class="buttonText">
                            Пациенты
                        </div>
                        <div class="underline">&nbsp;</div>
                    </div>
                    <div class="titleButton">
                        <div class="buttonText">
                            Врачи
                        </div>
                        <div class="underline">&nbsp;</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="main">
                    <img class="background" src="./delfy_blu2.png" alt="DelfinUfa">
                    <div class="label corbel textHuge textCenter colorWhite">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis ut risus pretium dapibus. Nulla fringilla dictum nisl id pellentesque.
                    </div>
                    <div class="openRegistrationButtonContainer">
                        <div class="buttonText corbel textVeryLarge textCenter colorGray">
                            Записаться
                        </div>
                        <div class="openRegistrationButton">
                        </div>
                        <div class="buttonPulsator"></div>
                    </div>
                    <div class="box">
                        <div class="boxContainer textHuge">
                            <div class="promotionContainer">
                                <div>
                                АКЦИЯ
                                </div>
                                <img src="./promEx.png" alt="promotion example">
                            </div>
                            <div class="reviewsContainer">
                                <img src="./revEx.png" alt="reviews example">
                            </div>
                            <div class="mapContainer">
                                <img src="./mapEx.png" alt="map example">
                            </div>
                        </div>
                    </div>
                    <div class="registration">
                        <div class="registrationBackground"> 
                        </div>
                        <div class="registrationContainer">
                            <div class="registrationForm">
                                <div class="mapContainer">
                                    <div id="map">
                                    </div>
                                </div>
                                <div class="dataForm textMedium">
                                    <div class="nameTitle">
                                        Как к Вам обращаться?
                                    </div>
                                    <input type="text" class="nameInput textMedium">
                                    <div class="phoneTitle">
                                        Номер телефона для связи с Вами:
                                    </div>
                                    <input type="phone" class="phoneInput textMedium">
                                    <div class="reasonTitle">
                                        Что Вас беспокоит?
                                    </div>
                                    <textarea class="reasonInput textMedium"></textarea>
                                    <div class="registerButton">
                                        Отправить заявку
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services">
                    <table class="table">
                        <tr>
                            <td>
                                Наименование услуги
                            </td>
                            <td>
                                Стоимость, руб.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="footer colorWhite">
                <div class="text textSmall">
                    Cтоматологическая клиника © "Дельфин", 2024
                </div>
                <div class="text textSmall">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Duis tempus tellus id faucibus ullamcorper. <br>Ut imperdiet, ipsum nec venenatis accumsan, quam sapien consequat velit, in pulvinar diam metus et purus. <br>Sed semper interdum turpis at efficitur.
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
    <script src="./index.js"></script>
</html>