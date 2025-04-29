$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            { title: 'Сеанс 1', start: '2025-04-30T10:00:00', end: '2025-04-30T11:00:00', description: 'Доступно для записи' },
            { title: 'Сеанс 2', start: '2025-04-30T14:00:00', end: '2025-04-30T15:00:00', description: 'Доступно для записи' }
        ],
        eventClick: function(event) {
            alert('Вы выбрали сеанс: ' + event.title + ' в ' + event.start.format('HH:mm'));
            event.description = 'Занято';
            $(this).css('background-color', '#FF0000');
        }
    });

    AOS.init({ duration: 1000, once: true });
});
