// Animar las barras de habilidades
document.addEventListener('DOMContentLoaded', () => {
  // Para progress-bar-value (skills)
  document.querySelectorAll('.progress-bar-value').forEach(bar => {
    let target = bar.getAttribute('data-value') || "0";
    bar.style.width = '0%'; // Inicialmente 0%
    setTimeout(() => {
      bar.style.width = target + '%';
    }, 400);
  });

  // Para los charts de idiomas (language)
  document.querySelectorAll('.language-chart').forEach(chart => {
    let value = parseInt(chart.getAttribute('data-percent')) || 0;
    let label = chart.querySelector('.lang-label');
    let current = 0;
    let step = Math.ceil(value / 40); // control de velocidad

    function animateLanguage() {
      if (current < value) {
        current += step;
        if (current > value) current = value;
        chart.querySelector('.lang-percent').textContent = current + '%';
        requestAnimationFrame(animateLanguage);
      }
    }
    animateLanguage();
  });
});
