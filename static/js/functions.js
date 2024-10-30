// 旋转星星
function rotateStar() {
    const star = document.getElementById("star");
    star.classList.toggle("rotate-star");
}

// 获取当前时间
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
    const elements = [
        { id: "this_year", value: year },
        { id: "this_month", value: month },
        { id: "this_day", value: day },
        { id: "this_hour", value: hour },
        { id: "this_minute", value: minute },
        { id: "this_second", value: second }
    ];
    elements.forEach(element => {
        document.getElementById(element.id).innerHTML = `${element.value}`;
    });
    setTimeout(() => getTime("this_second"), 1000);
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
            return -2; // 没用的返回值 :(
        }
    } else {
        return -3; // 没用的返回值 :(
    }
}

// 生成本月的日历
function generateCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    
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
        html += `<td>${day}</td>`;
    }
    html += "</tr></thead><tbody>";

    for (const week of calendar) {
        html += "<tr>";
        for (const day of week) {
            if (day === null) {
                html += `<td class="table-light">${""}</td>`;
            } else if (isToday(year, month, day) === 1) {
                html += `<td class="table-primary">${day}</td>`;
            } else {
                html += `<td>${day}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</tbody></table>";

    document.getElementById("calendar").innerHTML = html;
}