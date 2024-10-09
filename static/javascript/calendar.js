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

    let html = "<table><tr>";
    for (const day of daysOfWeek) {
        html += `<th>${day}</th>`;
    }
    html += "</tr>";

    for (const week of calendar) {
        html += "<tr>";
        for (const day of week) {
            html += `<td>${day || ""}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("calendar").innerHTML = html;
}

function updateCalendar() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    generateCalendar(year, month);
}
