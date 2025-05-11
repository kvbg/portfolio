const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    body.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

const jobTitle = document.getElementById('job-title');
const title = "Modern Technologies, AI, Influencer Marketing ";
let isDeleting = false;
let text = '';
let typeSpeed = 100;

function typeWriter() {
    const currentSpeed = isDeleting ? typeSpeed / 2 : typeSpeed;
    
    text = title.substring(0, isDeleting ? text.length - 1 : text.length + 1);
    jobTitle.textContent = text;
    
    if (!isDeleting && text === title) {
        isDeleting = true;
        typeSpeed = 3000;
    } else if (isDeleting && text === '') {
        isDeleting = false;
        typeSpeed = 500;
    } else {
        typeSpeed = 100;
    }
    
    setTimeout(typeWriter, currentSpeed);
}

setTimeout(typeWriter, 1000);

const animationOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

function createAnimationObserver(elements, delayMs = 200) {
    return new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * delayMs);
            }
        });
    }, animationOptions);
}

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, animationOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillTags = document.querySelectorAll('.skill-tag');
    const skillObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            skillTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.classList.add('visible');
                }, index * 100);
            });
        }
    }, { ...animationOptions, threshold: 0.5 });
    
    skillObserver.observe(skillsSection);
}

const elementGroups = [
    { selector: 'section', observer: sectionObserver },
    { selector: '.timeline-item', observer: createAnimationObserver(document.querySelectorAll('.timeline-item'), 200) },
    { selector: '.education-item', observer: createAnimationObserver(document.querySelectorAll('.education-item'), 300) },
    { selector: '.certificate-item', observer: createAnimationObserver(document.querySelectorAll('.certificate-item'), 200) },
    { selector: '.language-item', observer: createAnimationObserver(document.querySelectorAll('.language-item'), 200) },
    { selector: '.contact-item', observer: createAnimationObserver(document.querySelectorAll('.contact-item'), 150) },
    { selector: '.cv-download', observer: sectionObserver }
];

elementGroups.forEach(group => {
    document.querySelectorAll(group.selector).forEach(element => {
        group.observer.observe(element);
    });
});

document.querySelectorAll('.graphic-wrapper img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.querySelector('img').src = img.src;
        lightbox.classList.add('active');
    });
});

const lightbox = document.getElementById('lightbox');
lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.video-wrapper video').forEach(video => {
    video.setAttribute('preload', 'metadata');

    video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0.00001;
    });

    video.addEventListener('seeked', function onSeeked() {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        
        video.setAttribute('poster', canvas.toDataURL('image/jpeg'));
        video.currentTime = 0;
        video.removeEventListener('seeked', onSeeked);
    });
});