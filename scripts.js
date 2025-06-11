document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("请填写所有必填字段！");
    }
});
