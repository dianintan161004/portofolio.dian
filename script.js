// 1. Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
});

// 2. Modal Interaktif Proyek
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

function openModal(title, description) {
  modalTitle.innerText = title;
  modalDesc.innerText = description;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// 3. Form Contact Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.innerText = 'Pesan Anda telah terkirim! (Simulasi)';
  formStatus.style.color = 'limegreen';
  contactForm.reset();
});
