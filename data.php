<?php
    switch(htmlspecialchars($_GET["command"]))
    {
        case "getTestData":
            getTestData();
            break;
            /*
        case "getDeviceData":
            getDeviceData(htmlspecialchars($_GET["deviceid"]));
            break;
            */
        default:
            return;
    }
    function connect()
    {
        $connect = mysqli_connect("127.0.0.1:3306", "046149013_new", ">c^q5j#Ng>]:", "delfinufa_new");
        $connect->set_charset("utf8");
        return $connect;
    }
    function getTestData()
    {
        $link = connect();
        $query = "Select Id, Test From `Test`";
        $stmt = mysqli_prepare($link, $query);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $data = (array)null;
        foreach ($result as $item)
        {
            array_push($data, [$item["Id"], $item["Test"]]);
        }
        mysqli_stmt_close($stmt);
        mysqli_close($link);
        echo json_encode($data);
    }
?>