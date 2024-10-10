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

function getMonthString(year, month) {
    let str = `<p>${year}年${month}月</p>`;
    document.getElementById("monthString").innerHTML = str;
}

function generateCalendar(year, month) {
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

    let html =
        '<table class="table table-bordered"><thead class="table-info"><tr>';
    for (const day of daysOfWeek) {
        html += `<th>${day}</th>`;
    }
    html += "</tr></thead><tbody>";

    for (const week of calendar) {
        html += "<tr>";
        for (const day of week) {
            if (day === null) {
                html += `<td class="table-light">${""}</td>`;
            } else {
                html += `<td>${day}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</tbody></table>";

    document.getElementById("calendar").innerHTML = html;
}
