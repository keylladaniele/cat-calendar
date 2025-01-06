const calendarGrid = document.getElementById('calendar-grid');
const currentMonth = document.getElementById('current-month');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');

let date = new Date();

function renderCalendar() {
  calendarGrid.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = date.toLocaleString('default', { month: 'long', year: 'numeric' });
  currentMonth.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  weekdays.forEach(day => {
    const weekdayCell = document.createElement('div');
    weekdayCell.classList.add('weekday');
    weekdayCell.textContent = day;
    calendarGrid.appendChild(weekdayCell);
  });

  const firstDay = new Date(year, month, 1).getDay();

  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= lastDay; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day');
    dayCell.innerHTML = `<span>${day}</span><i class="fa-solid fa-paw"></i>`;

    dayCell.addEventListener('click', () => {
      document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
      dayCell.classList.add('selected');
    });

    calendarGrid.appendChild(dayCell);
  }
}

prevMonth.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
