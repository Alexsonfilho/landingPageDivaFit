document.addEventListener('DOMContentLoaded', () => {
  // Feedback visual ao clicar nos botões de ação
  const buttons = document.querySelectorAll('a[role="button"]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.97)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});