var services = [];
$(document).ready(function()
{
    //Обновление css файлов
    /*
    for (var link of document.querySelectorAll("link[rel=stylesheet]"))
    {
        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
    }
    */
    $(".mainPageButton").on("click", function()
    {
        $(".contentMain").css("display", "block");
        $(".contentServices").css("display", "none");
        $(".contentPatients").css("display", "none");
        $(".contentDoctors").css("display", "none");
        $(document).scrollTop(0);
    });
    $(".servicesPageButton").on("click", function()
    {
        $(".contentMain").css("display", "none");
        $(".contentServices").css("display", "block");
        $(".contentPatients").css("display", "none");
        $(".contentDoctors").css("display", "none");
        $(document).scrollTop(0);
    });
    $(".patientsPageButton").on("click", function()
    {
        $(".contentMain").css("display", "none");
        $(".contentServices").css("display", "none");
        $(".contentPatients").css("display", "block");
        $(".contentDoctors").css("display", "none");
        $(document).scrollTop(0);
    });
    $(".doctorsPageButton").on("click", function()
    {
        $(".contentMain").css("display", "none");
        $(".contentServices").css("display", "none");
        $(".contentPatients").css("display", "none");
        $(".contentDoctors").css("display", "block");
        $(document).scrollTop(0);
    });
    $(document).on("scroll", function()
    {
        if ($(this).scrollTop() > 0)
        {
            $(".title").addClass("scrollAnimation");
            $(".buttonListForm").addClass("scrollAnimation");
            $(".footer").addClass("scrollAnimation");

            $(".mainImage").css("transform", `translateY(${-$(this).scrollTop() / ($(this).height() - $(window).height()) * 130}px) rotate(-15deg)`);
        }
        else
        {
            $(".title").removeClass("scrollAnimation");
            $(".buttonListForm").removeClass("scrollAnimation");
            $(".footer").removeClass("scrollAnimation");

            $(".mainImage").css("transform", "rotate(-15deg)");
        }
    });
    loadServices();
});
function loadServices()
{
    services.push(["Первичный осмотр и консультация", "500"]);
    services.push(["Медицинское обследование для оформления справок", "500"]);
    services.push(["Диагностический цифровой прицельный снимок RVG", "400"]);
    services.push(["Анестезия аппликационная", "600"]);
    services.push(["Анестезия  инфильтрационная отечественного производства", "600"]);
    services.push(["Анестезия карпульная проводниковая  (импортное)", "600"]);
    services.push(["Снятие зубных отложений механическим способом", "350"]);
    services.push(["Снятие над- и поддесневого камня с помощью аппарата Пьезон-мастер", "350"]);
    services.push(["Снятие зубного налета (Air-flow)1 зуб", "350"]);
    services.push(["Профессиональная чистка зубов пастой «Детартрин»", "350"]);
    services.push(["Восстановление одного отсутствующего зуба с использованием «Ribond-системы»", "8000"]);
    services.push(["Реставрация разрушенного зуба  анкерным штифтом", "8000"]);
    services.push(["Реставрация разрушенного зуба  стекловолоконным штифтом", "8000"]);
    services.push(["Установка Скайза(без стоимости камня)", "7000"]);
    services.push(["Отбеливание зубов (химическое)", "8000"]);
    services.push(["Глубокое фторирование 1зуба", "400"]);
    services.push(["Наложение девитализирующей пасты", "400"]);
    services.push(["Механическая обработка канала", "650"]);
    services.push(["Закрытие перфорации «Pro-root»", "1000"]);
    services.push(["Полировка, коррекция и пришлифовывание пломбы", "400"]);
    services.push(["Наложение временной пломбы", "400"]);
    services.push(["I класс по блеку", "1900"]);
    //
    services.push(["Первичный осмотр и консультация", "500"]);
    services.push(["Медицинское обследование для оформления справок", "500"]);
    services.push(["Диагностический цифровой прицельный снимок RVG", "400"]);
    services.push(["Анестезия аппликационная", "600"]);
    services.push(["Анестезия  инфильтрационная отечественного производства", "600"]);
    services.push(["Анестезия карпульная проводниковая  (импортное)", "600"]);
    services.push(["Снятие зубных отложений механическим способом", "350"]);
    services.push(["Снятие над- и поддесневого камня с помощью аппарата Пьезон-мастер", "350"]);
    services.push(["Снятие зубного налета (Air-flow)1 зуб", "350"]);
    services.push(["Профессиональная чистка зубов пастой «Детартрин»", "350"]);
    services.push(["Восстановление одного отсутствующего зуба с использованием «Ribond-системы»", "8000"]);
    services.push(["Реставрация разрушенного зуба  анкерным штифтом", "8000"]);
    services.push(["Реставрация разрушенного зуба  стекловолоконным штифтом", "8000"]);
    services.push(["Установка Скайза(без стоимости камня)", "7000"]);
    services.push(["Отбеливание зубов (химическое)", "8000"]);
    services.push(["Глубокое фторирование 1зуба", "400"]);
    services.push(["Наложение девитализирующей пасты", "400"]);
    services.push(["Механическая обработка канала", "650"]);
    services.push(["Закрытие перфорации «Pro-root»", "1000"]);
    services.push(["Полировка, коррекция и пришлифовывание пломбы", "400"]);
    services.push(["Наложение временной пломбы", "400"]);
    services.push(["I класс по блеку", "1900"]);
    for (let i = 0; i < services.length; i++)
    {
        $(".sercivesTable tr:last").after("<tr><td>" + services[i][0] + "</td><td>" + services[i][1] + "</td></tr>");
    }
}