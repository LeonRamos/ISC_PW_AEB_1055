// Animar barras de habilidades y porcentajes de idioma
document.addEventListener('DOMContentLoaded', () => {
  // Progress bars
  document.querySelectorAll('.progress-bar-value').forEach(bar => {
    let target = bar.getAttribute('data-value') || "0";
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = target + '%'; }, 300);
  });

  // Language charts
  document.querySelectorAll('.language-chart').forEach(chart => {
    let value = parseInt(chart.getAttribute('data-percent')) || 0;
    let percentEl = chart.querySelector('.lang-percent');
    let current = 0, step = Math.ceil(value / 40);
    function animate() {
      if (current < value) {
        current += step;
        if (current > value) current = value;
        percentEl.textContent = current + '%';
        requestAnimationFrame(animate);
      }
    }
    animate();
  });
});
