document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('td').forEach(td => {
      td.addEventListener('click', () => {
        td.style.backgroundColor = 'grey';
        td.innerText = '';
      });
    });
  });
  