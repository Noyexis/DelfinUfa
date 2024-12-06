function SendHwaa()
{
    var url = "https://api.telegram.org/bot7825856724:AAE9HhhuxDGA34oBYCQ8kWg-B9VbSBbal2E/sendMessage?chat_id=-4603636417&text=hwaaa&parse_mode=html";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}
$( document ).ready(function() {
    console.log( "ready!" );
    $("#sendRequest").on("click", function() {
        SendHwaa();
    })
});