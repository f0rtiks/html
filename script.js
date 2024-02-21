function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 50.62519, lng: 26.24528} // Начальные координаты центра карты
    });

    // Массив точек с координатами и описаниями
    var points = [
        {lat: 50.62669, lng: 26.20035, description: 'вул. Кулика і Гудачека 23'},
        {lat: 50.62028, lng: 26.24386, description: 'Lombard'},
        {lat: 50.62335, lng: 26.20220, description: 'вул. Кулика і Гудачека 21'},
        {lat: 50.63854, lng: 26.19788, description: 'Dynamo'},
        {lat: 50.62029, lng: 26.24341, description: 'вул. Соборна 192д'},
        {lat: 50.61856, lng: 26.25270, description: 'вул. Соборна 17'},
        {lat: 50.61615, lng: 26.28029, description: 'вул. Київська 67'},
        {lat: 50.62922, lng: 26.27178, description: 'вул. Червонія 16'},
        {lat: 50.63424, lng: 26.27747, description: 'вул. Червонія 67'},
        {lat: 50.61894, lng: 26.24777, description: 'Zlata'},
        {lat: 50.60526, lng: 26.26663, description: 'Likarnya'},
        {lat: 50.61383, lng: 26.27454, description: 'Description 1'},
        {lat: 50.61608, lng: 26.27450, description: '12 schoоl'}
    ];

    var infoWindow = new google.maps.InfoWindow(); // Создаем окно информации

    // Добавление маркеров для каждой точки
    for (var i = 0; i < points.length; i++) {
        var marker = new google.maps.Marker({
            position: points[i],
            map: map,
            description: points[i].description // Сохраняем описание в качестве свойства маркера
        });

        // Добавляем слушатели событий для отображения и скрытия описания при наведении на маркер
        google.maps.event.addListener(marker, 'mouseover', function() {
            infoWindow.setContent(this.description);
            infoWindow.open(map, this);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
            infoWindow.close();
        });
    }
}


// Получаем ссылки на элементы навигации
const optoviKursiLink = document.querySelector('a[href="#Оптові_курси"]');
const valyutniPariLink = document.querySelector('a[href="#Валютні_пари"]');
const kontaktyLink = document.querySelector('a[href="#Контакти"]');
const proNasLink = document.querySelector('a[href="#Про_нас"]');

// Обработчик события при клике на ссылки
optoviKursiLink.addEventListener('click', scrollToOptoviKursi);
valyutniPariLink.addEventListener('click', scrollToValyutniPari);
kontaktyLink.addEventListener('click', scrollToKontakty);
proNasLink.addEventListener('click', scrollToProNas);

// Функции для скроллинга к определенному div с учетом навигационного элемента
function scrollToOptoviKursi(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#Оптові_курси');
    const navHeight = document.querySelector('.header').offsetHeight; // Высота навигационного элемента
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function scrollToValyutniPari(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#Валютні_пари');
    const navHeight = document.querySelector('.header').offsetHeight; // Высота навигационного элемента
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function scrollToKontakty(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#Контакти');
    const navHeight = document.querySelector('.header').offsetHeight; // Высота навигационного элемента
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function scrollToProNas(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#Про_нас');
    const navHeight = document.querySelector('.header').offsetHeight; // Высота навигационного элемента
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
