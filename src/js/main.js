// Function to inject components
function injectComponents() {
    // Inject header
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
      import('../components/header.js')
        .then(module => {
          headerPlaceholder.innerHTML = module.header;
        });
    }
  
    // Inject footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
      import('../components/footer.js')
        .then(module => {
          footerPlaceholder.innerHTML = module.footer;
        });
    }
  }
  

  // Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', injectComponents);
