// Konfigurasi Tailwind (Jika tetap ingin menggunakan script di HTML, pindahkan ini ke head)
// Namun idealnya gunakan tailwind.config.js jika di lingkungan development lokal.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                charcoal: '#1a1c1e',
                forest: '#14261d',
                cream: '#f4f1ea',
                accent: '#d4af37',
                'accent-bright': '#f1d18a'
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Inisialisasi Lucide Icons
lucide.createIcons();

// Logika Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isActive = mobileMenu.classList.toggle('active');
    mobileMenu.classList.toggle('pointer-events-auto', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
}

menuToggle?.addEventListener('click', toggleMenu);
menuClose?.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Interaksi Scroll
window.addEventListener('scroll', () => {
    // 1. Progress Bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressEl = document.getElementById("progress");
    if(progressEl) progressEl.style.width = scrolled + "%";
    
    // 2. Reveal on Scroll
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Jalankan scroll sekali saat load untuk memicu animasi awal
window.dispatchEvent(new Event('scroll'));
