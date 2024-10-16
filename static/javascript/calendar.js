function defaultCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    document.getElementById("year").value = year;
    document.getElementById("month").value = month;
    updateCalendar();
}

function updateCalendar() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    getMonthString(year, month);
    generateCalendar(year, month);
}

function isToday(year, month, day) {
    const today = new Date();
    if (day === today.getDate()) {
        if (month == today.getMonth() + 1) {
            if (year == today.getFullYear()) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return -2;
        }
    } else {
        return -3;
    }
    // 没什么用的返回值 :(
}

function getThisMonthString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return `${year}年${month}月`;
}

function getMonthString(year, month) {
    let str = `<p>${year}年${month}月</p>`;
    document.getElementById("monthString").innerHTML = str;
}

function avoidWrongInput() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    if (year === "" || month === "" || year === null || month === null) {
        alert("注意，年份或月份不能为空！\n即将跳转到" + getThisMonthString() + "。");
        return false;
    } else if (month < 1 || month > 12) {
        alert("注意，月份必须在1-12之间！\n即将跳转到" + getThisMonthString() + "。");
        return false;
    }
    return true;
}

function generateCalendar(year, month) {
    if (!avoidWrongInput()) {
        defaultCalendar();
        return;
    }
    const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
    const date = new Date(year, month - 1, 1);
    const calendar = [];
    let week = new Array(7).fill(null);

    while (date.getMonth() === month - 1) {
        week[date.getDay()] = date.getDate();
        if (date.getDay() === 6) {
            calendar.push(week);
            week = new Array(7).fill(null);
        }
        date.setDate(date.getDate() + 1);
    }
    if (week.some((day) => day !== null)) {
        calendar.push(week);
    }

    let html = '<table class="table table-bordered text-center"><thead class="table-info"><tr>';
    for (const day of daysOfWeek) {
        html += `<th>${day}</th>`;
    }
    html += "</tr></thead><tbody>";

    for (const week of calendar) {
        html += "<tr>";
        for (const day of week) {
            if (day === null) {
                html += `<td class="table-light">${""}</td>`;
            } else if (isToday(year, month, day) === 1) {
                html += `<td class="table-primary">${day}</td>`;
            } else if (isToday(year, month, day) === -1) {
                html += `<td class="table-secondary">${day}</td>`;
            } else {
                html += `<td>${day}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</tbody></table>";

    document.getElementById("calendar").innerHTML = html;
}

function pressEnter_year() {
    document.getElementById("year").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (document.getElementById("month").value === "") {
                alert("提示：您不能仅输入年份，请重试。");
            } else {
                updateCalendar();
            }
        }
    });
}

function pressEnter_month() {
    document.getElementById("month").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            updateCalendar();
        }
    });
}

function addLoadingANimation() {
    document.getElementById("start-button").addEventListener("click", function () {
        var loader = document.getElementById("loader");
        var table = document.getElementById("calendar");

        loader.style.display = "block";
        table.style.display = "none";

        setTimeout(function () {
            loader.style.display = "none";
            table.style.display = "block";
        }, 3000);
    });
}