document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        events: [
            {
                title: 'Pickleball Session',
                start: '2024-11-04',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-05',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-06',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-07',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-08',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-09',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-11',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-12',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-18',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-19',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-20',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-21',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-22',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-25',
                display: 'background',
            },
            {
                title: 'Pickleball Session',
                start: '2024-11-26',
                display: 'background',
            },
        ],
        initialView: 'dayGridMonth',
        default: 'standard',
    });
    calendar.render();
});