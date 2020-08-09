
axios.get('http://localhost:3001/action/pee', {headers: {"Access-Control-Allow-Origin": "*"}})
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

console.log("working")

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
        {
            title: 'Breakfast',
            start: '2020-08-04T07:30:00'
          },
        {
            title: 'Walk to Garden',
            start: '2020-08-04T14:30:00'
          },
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
            start: '2020-08-04T19:30:00',
          },
          
    ]
  });
  calendar.render();
});
