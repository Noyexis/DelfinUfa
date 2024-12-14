$( document ).ready(function()
{
    //Обновление css файлов
    for (var link of document.querySelectorAll("link[rel=stylesheet]"))
    {
        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
    }
    $(".mainPageButton").on("click", function()
    {
        window.location.replace("http://delfinufa/index.php");
    });
    $(".servicesPageButton").on("click", function()
    {
        window.location.replace("http://delfinufa/pages/services.php");
    });
    $(".patientsPageButton").on("click", function()
    {
        window.location.replace("http://delfinufa/pages/patients.php");
    });
    $(".doctorsPageButton").on("click", function()
    {
        window.location.replace("http://delfinufa/pages/doctors.php");
    });
});