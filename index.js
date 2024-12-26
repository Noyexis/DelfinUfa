var scrollPosition = 0;
var registrationButtonVectorX = 0;
var registrationButtonVectorY = 0;
$(document).ready(function()
{
    //Обновление css файлов
    /*
    for (var link of document.querySelectorAll("link[rel=stylesheet]"))
    {
        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
    }
    */
    //Скроллинг тела
    $(document).on("scroll", function()
    {
        scrollPosition = $(document).scrollTop() / ($(document).height() - $(window).height());
        if (scrollPosition == 0)
        {
            $("#main").removeClass("scroll");
        }
        else
        {
            $("#main").addClass("scroll");
        }
        document.documentElement.style.setProperty('--scrollPositionH', `${scrollPosition}vh`);
        document.documentElement.style.setProperty('--scrollPositionP', `${scrollPosition}%`);
    });
    $(window).resize(function()
    {
        $(document).trigger("scroll");
    });
    //trigger mousemove?
    $(document).mousemove(function(e) {
        var mousePositionX = e.clientX;
        var mousePositionY = e.clientY;
        var elementHalfWidth = $(".openRegistrationButtonContainer").width() / 2;
        var elementHalfHeight = $(".openRegistrationButtonContainer").height() / 2;
        var elementCenterX = $(".openRegistrationButtonContainer").position().left + elementHalfWidth;
        var elementCenterY = $(".openRegistrationButtonContainer").position().top + elementHalfHeight;
        registrationButtonVectorX = (mousePositionX - elementCenterX) / elementHalfWidth / 7;
        registrationButtonVectorY = (mousePositionY - elementCenterY) / elementHalfHeight / 7;
        if (registrationButtonVectorX > 1)
        {
            registrationButtonVectorX = 1;
        }
        if (registrationButtonVectorX < -1)
        {
            registrationButtonVectorX = -1;
        }
        if (registrationButtonVectorY > 1)
        {
            registrationButtonVectorY = 1;
        }
        if (registrationButtonVectorY < -1)
        {
            registrationButtonVectorY = -1;
        }
        if (mousePositionX - elementCenterX > -elementHalfWidth && mousePositionX - elementCenterX < elementHalfWidth && mousePositionY - elementCenterY > -elementHalfHeight && mousePositionY - elementCenterY < elementHalfHeight)
        {
            registrationButtonVectorX = 0;
            registrationButtonVectorY = 0;
        }
        document.documentElement.style.setProperty('--registrationButtonVectorXP', `${registrationButtonVectorX}%`);
        document.documentElement.style.setProperty('--registrationButtonVectorXW', `${registrationButtonVectorX}vw`);
        document.documentElement.style.setProperty('--registrationButtonVectorYP', `${registrationButtonVectorY}%`);
        document.documentElement.style.setProperty('--registrationButtonVectorYH', `${registrationButtonVectorY}vh`);
    });
    //При наведении
    $(".header, .footer, .titleButton, .openRegistrationButtonContainer").hover(function()
    {
        $(this).addClass("hover");
    }, function()
    {
        $(this).removeClass("hover");
    });
    $(".openRegistrationButtonContainer").click(function()
    {
       $(".registration").addClass("click");
    });
    $(".registrationBackground").click(function()
    {
        $(".registration").removeClass("click");
    });
    $(".registerButton").click(function()
    {
        sendRequest();
    });
    //start
    $(document).trigger("scroll");
    setInterval(noise, 115);
});
function noise() {
    $('.noise').css("backgroundPosition", `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`);
}
function sendRequest()
{
    var name = $(".nameInput").val();
    var phone = $(".phoneInput").val();
    var reason = $(".reasonInput").val();
    //console.log(/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone));
    //var url = "https://api.telegram.org/bot7825856724:AAE9HhhuxDGA34oBYCQ8kWg-B9VbSBbal2E/sendMessage?chat_id=-4603636417&text="; OLD
    var url = "https://api.telegram.org/bot7825856724:AAE9HhhuxDGA34oBYCQ8kWg-B9VbSBbal2E/sendMessage?chat_id=-4764941748&text=";
    url += name + "%0A" + phone + "%0A" + reason;
    url += "&parse_mode=html";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}
function test()
{
    $.get("./data.php?command=getTestData", function(data)
    {
        var array = jQuery.parseJSON(data);
        console.log(array);
    });
}