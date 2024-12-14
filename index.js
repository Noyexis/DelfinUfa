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
            $(".title").addClass("fadeOutAnimation");
            $(".buttonListForm").addClass("fadeInAnimation");
        }
        else
        {
            $(".title").removeClass("fadeOutAnimation");
            $(".buttonListForm").removeClass("fadeInAnimation");
        }
    });
});