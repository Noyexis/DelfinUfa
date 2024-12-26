var isFormOpened = false;
var isFormClosed = true;
//Загрузка страницы
$( document ).ready(function()
{
    //Обновление css файлов
    for (var link of document.querySelectorAll("link[rel=stylesheet]"))
    {
        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
    }
    //Анимация при наведении курсора
    $(".openRequestFormButton, .cancelButton, .submitButton").on("mouseenter", function()
    {
        /*
        Документация: stop(clearQueue, jumpToEnd) останавливает текущую анимацию объекта.
        Опциональный параметр "clearQueue" - очищать ли очередь анимации (полезно при быстром переключении, 
        а ля дергать мышкой и ждать, пока вся запущенная куча анимаций проиграется)
        Опциональный параметр "jumpToEnd" - перескакивает на последний кадр анимации (если задавать анимацию вперёд 
        и назад, то лучше оставлять false, так не будет эффекта моргания, чистая плавная анимация)
        */
        $(this).stop(true, false).animate({ scale: "110%" }, 100, function()
        {

        });
    });
    $(".openRequestFormButton, .cancelButton, .submitButton").on("mouseleave", function()
    {
        $(this).stop(true, false).animate({ scale: "100%" }, 100, function()
        {

        });
    });
    $(".openRequestFormButton, .cancelButton").on("click", function()
    {
        toggleRequestForm();
    });
    $(".submitButton").on("click", function()
    {
        sendRequest();
    });
    $(window).on("keydown", function(e)
    {
        if (e.key == "Escape" && isFormOpened)
        {
            toggleRequestForm();
        }
    });
});
function toggleRequestForm()
{
    if (isFormOpened)
    {
        isFormOpened = false;
        $(".requestFormContainer").stop(true, false).animate({ scale: "50%" }, 500, function()
        {
            $(".requestFormContainer").css({"display": "none"});
            $(".requestFormBlur").css({"display": "none"});
            isFormClosed = true;
        });
        $(".requestFormButtons").stop(true, false).animate({ scale: "100%" }, 500, function()
        {
            $(".requestFormButtons").css({"display": "none"});
        });
    }
    if (isFormClosed)
    {
        isFormClosed = false;
        $(".requestFormBlur").css({"display": "block"});
        $(".requestFormContainer").css({"display": "block"});
        $(".requestFormContainer").stop(true, false).animate({ scale: "100%" }, 500, function()
        {
            isFormOpened = true;
        });
        $(".requestFormButtons").css({"display": "flex"});
        $(".requestFormButtons").stop(true, false).animate({ scale: "100%" }, 500, function()
        {

        });
    }
}
function sendRequest()
{
    var name = $(".nameInput").val();
    var phone = $(".phoneInput").val();
    var description = $(".descriptionInput").val();
    console.log(/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone));
    $.get("./data.php?command=getTestData", function(data)
    {
        var array = jQuery.parseJSON(data);
        console.log(array);
    });
    /*
    var url = "https://api.telegram.org/bot7825856724:AAE9HhhuxDGA34oBYCQ8kWg-B9VbSBbal2E/sendMessage?chat_id=-4603636417&text=";
    var url = "https://api.telegram.org/bot7825856724:AAE9HhhuxDGA34oBYCQ8kWg-B9VbSBbal2E/sendMessage?chat_id=-4764941748&text="; NEW
    url += name + "%0A" + phone + "%0A" + description;
    url += "&parse_mode=html";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    */
}