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
        $(".content").text("Главная");
    });
    $(".servicesPageButton").on("click", function()
    {
        $(".content").text("Услуги");
    });
    $(".patientsPageButton").on("click", function()
    {
        $(".content").text("Пациенты");
    });
    $(".doctorsPageButton").on("click", function()
    {
        $(".content").text("Врачи");
    });
    $(document).on("scroll", function()
    {
        if ($(this).scrollTop() > 0)
        {
            $(".title").addClass("titleScrollAnimation");
            $(".buttonListForm").addClass("buttonListScrollAnimation");
            $(".button").addClass("buttonScrollAnimation");
        }
        else
        {
            $(".title").removeClass("titleScrollAnimation");
            $(".buttonListForm").removeClass("buttonListScrollAnimation");
            $(".button").removeClass("buttonScrollAnimation");
        }
    });
});