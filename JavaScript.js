function getCurrentDate() {
    // Создаем новый объект даты
    var currentDate = new Date();

    // Получаем день, месяц и год
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Месяцы начинаются с 0
    var year = currentDate.getFullYear();

    // Форматируем день и месяц, добавляя ведущий ноль, если значение меньше 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Формируем строку с датой в формате "00.00.0000"
    var formattedDate = day + '.' + month + '.' + year;

    return formattedDate;
}

// Получаем элемент div, в который будем выводить дату
var currentDateElement = document.getElementById('currentDate');

// Устанавливаем текст элемента div равным текущей дате
currentDateElement.textContent = getCurrentDate();

