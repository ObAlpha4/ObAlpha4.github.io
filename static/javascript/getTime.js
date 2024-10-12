function getTime(id) {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById("this_year").innerHTML = "" + year;
    document.getElementById("this_month").innerHTML = "" + month;
    document.getElementById("this_day").innerHTML = "" + day;
    document.getElementById("this_hour").innerHTML = "" + hour;
    document.getElementById("this_minute").innerHTML = "" + minute;
    document.getElementById("this_second").innerHTML = "" + second;
    setTimeout('getTime("' + "this_second" + '");', "1000");
    return true;
}
window.onload = getTime("this_second");