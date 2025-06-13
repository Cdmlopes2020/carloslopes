
 const checkbox = document.getElementById('toggleMode');
    const body = document.getElementById('siteBody');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        body.classList.remove('backgrounddark');
        body.classList.add('backgroundlight');
      } else {
        body.classList.remove('backgroundlight');
        body.classList.add('backgrounddark');
      }
    });



     window.addEventListener('load', () => {
    setTimeout(() => {
      const splash = document.getElementById('splash');
      splash.classList.add('hidden');

      // Depois da animação, esconder mesmo o elemento e mostrar conteúdo
      splash.addEventListener('transitionend', () => {
        splash.style.display = 'none';
        document.getElementById('content').style.display = 'block';
      });
    }, 3000); // 3000 ms = 3 segundos
  });


  const link = document.getElementById('linkCarlos');

  link.addEventListener('mouseenter', () => {
    // Remove se já existir (para reiniciar)
    link.classList.remove('animate__flipInX');

    // Força o reflow (para reiniciar a animação)
    void link.offsetWidth;

    // Adiciona a classe de animação
    link.classList.add('animate__flipInX');
  });






  