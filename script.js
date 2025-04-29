$(document).ready(function() {
    // Календарь с FullCalendar
    $('#calendar').fullCalendar({
        events: [
            { title: 'Сеанс 1', start: '2025-05-01T10:00:00', end: '2025-05-01T11:00:00' },
            { title: 'Сеанс 2', start: '2025-05-01T14:00:00', end: '2025-05-01T15:00:00' }
        ],
        eventClick: function(event) {
            alert('Вы выбрали сеанс: ' + event.title + ' в ' + event.start.format('HH:mm'));
            event.description = 'Занято';
            $(this).css('background-color', '#FF0000');
        }
    });

    // Анимации с AOS
    AOS.init({
        duration: 1500, // время анимации
        once: true // анимации только один раз
    });
});
