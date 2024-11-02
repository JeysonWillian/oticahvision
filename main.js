// Evento de rolagem que chama a função onScroll
window.addEventListener("scroll", onScroll);

// Chama a função onScroll inicialmente
onScroll();

// Função principal para lidar com a rolagem
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(testimonials);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

// Função para ativar a seção atual no menu
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

// Função para mostrar/esconder a navegação ao rolar a página
function showNavOnScroll() {
  const navigation = document.getElementById("navigation");
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// Função para mostrar/esconder o botão de "voltar ao topo" ao rolar a página
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Funções para abrir e fechar o menu
function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

// Inicialização do ScrollReveal para animações de rolagem
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #testimonials,
  #testimonials header,
  #testimonials .testimonial,
  #about, 
  #about header, 
  #about .content,
  #contact
`);
