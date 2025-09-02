// Active link add karna
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar a');

menuItem.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});


// Har animate element ko observe karo
const sections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // animation start
      // Agar chahte ho ek hi dafa chale to:
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 }); // 0.3 = 30% visible hone pr trigger

sections.forEach(section => {
  observer.observe(section);
});

