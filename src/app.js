
console.log("working")

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
        {
          title: 'Adventure Walk',
          start: '2020-08-06T14:00:00'
        },
        {
            title: 'Park Date',
            start: '2020-08-05T15:00:00'
          },
        {
            title: 'Pooped',
            start: '2020-08-04T07:30:00',
          },
          {
            title: 'Pooped',
            start: '2020-08-04T19:30:00',
          },
          
    ]
  });
  calendar.render();
});
