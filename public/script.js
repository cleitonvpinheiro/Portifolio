// Configurações Gerais
const CONFIG = {
    GITHUB_USERNAME: 'cleitonvpinheiro',
    WHATSAPP: {
        NUMBER: '5541988412058',
        MESSAGE: 'Olá! Vim através do seu portfólio e gostaria de conversar.',
    },
    SKILLS: [
        { skill: 'JavaScript', level: 80 },
        { skill: 'CSS', level: 70 },
        { skill: 'React', level: 85 },
    ],
    PROJECTS: [
        {
            title: 'Projeto 1',
            description: 'Descrição breve do projeto',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
        },
        {
            title: 'Projeto 2',
            description: 'Descrição breve do projeto',
            technologies: ['React', 'Node.js'],
            link: '#',
        },
    ],
};

const I18N = {
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'header.greeting': 'Olá, eu sou',
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou Desenvolvedor Full Stack com background em infraestrutura de TI, combinando base técnica sólida com experiência prática em desenvolvimento de software. Minha transição para desenvolvimento fortaleceu minha capacidade de resolução de problemas, visão sistêmica e foco na construção de soluções escaláveis e eficientes.',
        'about.p2': 'Desenvolvo aplicações web e mobile utilizando JavaScript e TypeScript, atuando com Node.js no back-end e React Native no desenvolvimento mobile multiplataforma. Construo APIs REST, implemento regras de negócio, realizo integração com bancos de dados e estruturo sistemas completos, do front-end ao back-end.',
        'about.p3': 'Tenho experiência no desenvolvimento de projetos reais como plataformas de e-commerce, sistemas de gestão logística, ferramentas de automação, dashboards analíticos e aplicações mobile com funcionamento offline.',
        'about.p4': 'Minha abordagem prioriza arquitetura limpa, performance, escalabilidade e código bem estruturado, sempre buscando gerar valor real para o negócio.',
        'about.p5': 'Além da tecnologia, sou pai, apaixonado por futebol, videogames e aprendizado contínuo. Disciplina, constância e visão de longo prazo orientam tanto minha vida profissional quanto pessoal.',
        'about.mission': '🚀 Minha missão é transformar desafios complexos em sistemas digitais confiáveis que impactam empresas e pessoas em escala.',
        'about.cv_pt': 'Baixar CV (PT)',
        'about.cv_en': 'Baixar CV (EN)',
        'skills.title': 'Minhas Habilidades',
        'projects.title': 'Meus Projetos',
        'projects.view': 'Ver Projeto',
        'projects.no_description': 'Sem descrição',
        'projects.view_github': 'Ver no GitHub',
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Vamos trabalhar juntos? Entre em contato comigo!',
        'contact.email_label': 'E-mail',
        'contact.linkedin_label': 'LinkedIn',
        'contact.whatsapp_label': 'WhatsApp',
        'contact.whatsapp_cta': 'Contate-me no WhatsApp',
        'form.sending': 'Enviando...',
        'form.sent_success': 'Mensagem enviada com sucesso!',
        'form.sent_error': 'Erro ao enviar mensagem. Tente novamente.',
        'form.send': 'Enviar',
        'footer.rights': 'Todos os direitos reservados.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'header.greeting': "Hi, I'm",
        'about.title': 'About Me',
        'about.p1': "I'm a Full Stack Developer with a background in IT infrastructure, combining a solid technical foundation with hands-on software development experience. Moving into development strengthened my problem-solving ability, systems thinking, and focus on building scalable, efficient solutions.",
        'about.p2': 'I build web and mobile applications using JavaScript and TypeScript, working with Node.js on the back end and React Native for cross-platform mobile development. I design REST APIs, implement business rules, integrate with databases, and architect end-to-end systems from front end to back end.',
        'about.p3': 'I have experience delivering real projects such as e-commerce platforms, logistics management systems, automation tools, analytical dashboards, and mobile apps with offline capability.',
        'about.p4': 'My approach prioritizes clean architecture, performance, scalability, and well-structured code, always aiming to deliver real business value.',
        'about.p5': "Beyond technology, I'm a dad and passionate about soccer, video games, and continuous learning. Discipline, consistency, and a long-term mindset guide both my professional and personal life.",
        'about.mission': '🚀 My mission is to turn complex challenges into reliable digital systems that impact businesses and people at scale.',
        'about.cv_pt': 'Download CV (PT)',
        'about.cv_en': 'Download Resume (EN)',
        'skills.title': 'My Skills',
        'projects.title': 'My Projects',
        'projects.view': 'View Project',
        'projects.no_description': 'No description',
        'projects.view_github': 'View on GitHub',
        'contact.title': 'Get in Touch',
        'contact.subtitle': "Let's work together? Contact me!",
        'contact.email_label': 'Email',
        'contact.linkedin_label': 'LinkedIn',
        'contact.whatsapp_label': 'WhatsApp',
        'contact.whatsapp_cta': 'Contact me on WhatsApp',
        'form.sending': 'Sending...',
        'form.sent_success': 'Message sent successfully!',
        'form.sent_error': 'Error sending message. Try again.',
        'form.send': 'Send',
        'footer.rights': 'All rights reserved.'
    }
};

const TYPED = {
    pt: ["Desenvolvedor", "Programador", "Criador"],
    en: ["Developer", "Programmer", "Creator"]
};

const CV_FILES = {
    pt: 'Cleiton Pinheiro CV PT.pdf',
    en: 'Cleiton Pinheiro CV EN.pdf'
};

let currentLang = 'pt';
let typeWriterInstance = null;

// Função para Animação de Digitação
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.timerId = null;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        this.txt = this.isDeleting
            ? fullTxt.substring(0, this.txt.length - 1)
            : fullTxt.substring(0, this.txt.length + 1);

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = this.isDeleting ? 150 : 300;

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        this.timerId = setTimeout(() => this.type(), typeSpeed);
    }

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
}

// Função para Inicializar TypeWriter
function initTypeWriter() {
    const txtElement = document.querySelector('.txt-type');
    if (txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        if (typeWriterInstance) {
            typeWriterInstance.stop();
        }
        typeWriterInstance = new TypeWriter(txtElement, words, wait);
    }
}

function getLang() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    return navigator.language && navigator.language.startsWith('pt') ? 'pt' : 'en';
}

function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = I18N[lang][key];
        if (t) el.innerHTML = t;
    });
}

function updateTyped(lang) {
    const el = document.querySelector('.txt-type');
    if (el) {
        el.setAttribute('data-words', JSON.stringify(TYPED[lang]));
        initTypeWriter();
    }
}

function initLangSelector() {
    const select = document.getElementById('lang-select');
    currentLang = getLang();
    applyTranslations(currentLang);
    updateTyped(currentLang);
    if (select) {
        select.value = currentLang;
        select.addEventListener('change', e => {
            currentLang = e.target.value;
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
            updateTyped(currentLang);
        });
    }
}

async function initCVButtons() {
    const btnPt = document.querySelector('.cv-btn-pt');
    const btnEn = document.querySelector('.cv-btn-en');
    if (btnPt) btnPt.href = CV_FILES.pt;
    if (btnEn) btnEn.href = CV_FILES.en;
    try {
        if (btnPt) {
            const resPt = await fetch(CV_FILES.pt, { method: 'HEAD' });
            if (!resPt.ok) btnPt.style.display = 'none';
        }
        if (btnEn) {
            const resEn = await fetch(CV_FILES.en, { method: 'HEAD' });
            if (!resEn.ok) btnEn.style.display = 'none';
        }
    } catch (_) {
        if (btnPt) btnPt.style.display = 'none';
        if (btnEn) btnEn.style.display = 'none';
    }
}

// Função para Renderizar Barras de Habilidades
function renderSkillBars() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    CONFIG.SKILLS.forEach(({ skill, level }) => {
        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');
        
        // Adicionando ícones às habilidades
        const icon = skill === 'JavaScript' ? 'fab fa-js' :
                     skill === 'CSS' ? 'fab fa-css3-alt' :
                     skill === 'React' ? 'fab fa-react' : 'fas fa-cogs';
        
        skillBar.innerHTML = `
            <div class="skill-info">
                <span><i class="${icon}"></i> ${skill}</span>
                <span>${level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-fill" style="width: 0;"></div>
            </div>
        `;
        skillsContainer.appendChild(skillBar);

        // Usando setTimeout para a animação da barra de habilidades
        setTimeout(() => {
            skillBar.querySelector('.skill-fill').style.width = `${level}%`;
        }, 100);
    });
}

// Função para Renderizar Projetos
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    CONFIG.PROJECTS.forEach(({ title, description, technologies, link }) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="project-tech">
                ${technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${link}" class="btn" target="_blank">${I18N[currentLang]['projects.view']}</a>
        `;
        projectsContainer.appendChild(card);
    });
}

// Função para Configurar Botão do WhatsApp
function setupWhatsAppLink() {
    const whatsappLink = document.getElementById('whatsapp-link');
    if (!whatsappLink) return;

    const encodedMessage = encodeURIComponent(CONFIG.WHATSAPP.MESSAGE);
    whatsappLink.href = `https://wa.me/${CONFIG.WHATSAPP.NUMBER}?text=${encodedMessage}`;

    // Adicionando ícone ao link
    whatsappLink.innerHTML = `<i class="fab fa-whatsapp"></i> Contate-me no WhatsApp`;
}

// Função para Buscar Repositórios do GitHub
async function fetchGitHubRepos() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    try {
        const response = await fetch(`https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const repos = await response.json();

        projectsContainer.innerHTML = '';

        repos.forEach(({ name, description, stargazers_count, forks_count, html_url }) => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.innerHTML = `
                <h3>${name.replace(/-/g, ' ')}</h3>
                <p>${description || I18N[currentLang]['projects.no_description']}</p>
                <div class="project-meta">
                    <span>⭐ ${stargazers_count}</span>
                    <span>🍴 ${forks_count}</span>
                </div>
                <a href="${html_url}" class="btn btn-github" target="_blank">
                    <i class="fab fa-github"></i> ${I18N[currentLang]['projects.view_github']}
                </a>
            `;
            projectsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
    }
}

// Função para Enviar Formulário
async function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = I18N[currentLang]['form.sending'];

        try {
            const formData = new FormData(contactForm);
            const formJSON = Object.fromEntries(formData);

            // Enviar para um serviço como EmailJS ou API customizada
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formJSON),
            });

            alert(I18N[currentLang]['form.sent_success']);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert(I18N[currentLang]['form.sent_error']);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = I18N[currentLang]['form.send'];
        }
    });
}

// Função para Inicializar o Portfólio
function initPortfolio() {
    initLangSelector();
    renderSkillBars();
    renderProjects();
    fetchGitHubRepos();
    setupContactForm();
    initCVButtons();
}

// Adicionar Evento de Carregamento do DOM
document.addEventListener('DOMContentLoaded', initPortfolio);
