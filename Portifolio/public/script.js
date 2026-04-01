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
        'meta.title': 'Cleiton Pinheiro - Full Stack Developer | Portfólio',
        'meta.description': 'Desenvolvedor Full Stack especializado em JavaScript, React, Node.js e Python. Criando soluções digitais inovadoras com foco em performance e experiência do usuário.',
        'meta.og_title': 'Cleiton Pinheiro - Full Stack Developer',
        'meta.og_description': 'Desenvolvedor Full Stack especializado em JavaScript, React, Node.js e Python.',
        'accessibility.skip_main': 'Pular para o conteúdo principal',
        'accessibility.skip_nav': 'Pular para a navegação',
        'nav.role': 'Full Stack Developer',
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'home.greeting': 'Olá, eu sou',
        'home.title': 'Full Stack Developer',
        'home.description': 'Transformo ideias em soluções digitais inovadoras. Especializado em desenvolvimento web moderno com foco em experiência do usuário e performance.',
        'home.cta_projects': 'Ver Projetos',
        'home.cta_contact': 'Entre em Contato',
        'home.available': 'Disponível para projetos',
        'about.title': 'Sobre Mim',
        'about.subtitle': 'Conheça minha jornada e paixão por tecnologia',
        'about.stat_experience': 'Anos de Experiência',
        'about.stat_projects': 'Projetos Concluídos',
        'about.stat_dedication': 'Dedicação',
        'about.history_title': 'Minha História',
        'about.p1': 'Sou Desenvolvedor Full Stack com background em infraestrutura de TI, combinando base técnica sólida com experiência prática em desenvolvimento de software. Minha transição para desenvolvimento fortaleceu minha capacidade de resolução de problemas, visão sistêmica e foco na construção de soluções escaláveis e eficientes.',
        'about.p2': 'Desenvolvo aplicações web e mobile utilizando JavaScript e TypeScript, atuando com Node.js no back-end e React Native no desenvolvimento mobile multiplataforma. Construo APIs REST, implemento regras de negócio, realizo integração com bancos de dados e estruturo sistemas completos, do front-end ao back-end.',
        'about.p3': 'Quando não estou programando, sou um pai dedicado e apaixonado por futebol e videogames. Acredito que o equilíbrio entre vida pessoal e profissional é essencial para a criatividade e produtividade.',
        'about.highlight_fullstack': 'Desenvolvimento Full Stack',
        'about.highlight_responsive': 'Design Responsivo',
        'about.highlight_data': 'Gestão de Dados',
        'about.highlight_teamwork': 'Trabalho em Equipe',
        'about.personal_title': 'Além do Código',
        'about.cta_contact': 'Vamos Conversar',
        'about.cv_pt': 'Baixar CV (PT)',
        'about.cv_en': 'Baixar CV (EN)',
        'experience.title': 'Experiência Profissional',
        'experience.subtitle': 'Minha trajetória profissional e conquistas',
        'experience.job1_period': '2021 - Presente',
        'experience.job1_title': 'Analista de Infraestrutura de TI',
        'experience.job1_company': 'Empresa Atual',
        'experience.job1_description': 'Responsável pela gestão e manutenção da infraestrutura de TI, incluindo servidores, redes e sistemas. Implementação de soluções automatizadas e otimização de processos.',
        'experience.skill_networks': 'Redes',
        'experience.skill_virtualization': 'Virtualização',
        'experience.job2_period': '2022 - Presente',
        'experience.job2_title': 'Desenvolvedor Full Stack',
        'experience.job2_company': 'Projetos Freelance',
        'experience.job2_description': 'Desenvolvimento de aplicações web modernas utilizando React, Node.js e outras tecnologias. Foco em criar soluções escaláveis e com excelente experiência do usuário.',
        'experience.job3_period': '2023 - Presente',
        'experience.job3_title': 'Estudos e Certificações',
        'experience.job3_company': 'Desenvolvimento Contínuo',
        'experience.job3_description': 'Constantemente aprimorando habilidades através de cursos, certificações e projetos pessoais. Foco em tecnologias modernas e melhores práticas de desenvolvimento.',
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologias e ferramentas que domino',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Ferramentas',
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Alguns dos meus trabalhos mais recentes',
        'projects.filter_all': 'Todos',
        'projects.filter_web': 'Web Apps',
        'projects.filter_mobile': 'Mobile',
        'projects.filter_api': 'APIs',
        'projects.cta_text': 'Interessado em ver mais?',
        'projects.cta_github': 'Ver no GitHub',
        'projects.cta_contact': 'Vamos Conversar',
        'projects.view': 'Ver Projeto',
        'projects.no_description': 'Sem descrição',
        'projects.view_github': 'Ver no GitHub',
        'contact.title': 'Vamos Trabalhar Juntos?',
        'contact.subtitle': 'Estou sempre aberto a novas oportunidades e projetos interessantes',
        'contact.email_label': 'Email',
        'contact.send_email': 'Enviar Email',
        'contact.whatsapp_label': 'WhatsApp',
        'contact.whatsapp_btn': 'Conversar',
        'contact.location_label': 'Localização',
        'contact.location_value': 'Curitiba, PR - Brasil',
        'contact.availability': 'Disponível para trabalho remoto',
        'contact.form_title': 'Envie uma Mensagem',
        'contact.form_name': 'Nome',
        'contact.form_name_placeholder': 'Seu nome',
        'contact.form_email': 'Email',
        'contact.form_email_placeholder': 'seu@email.com',
        'contact.form_subject': 'Assunto',
        'contact.form_subject_placeholder': 'Selecione um assunto',
        'contact.form_subject_freelance': 'Projeto Freelance',
        'contact.form_subject_job': 'Oportunidade de Emprego',
        'contact.form_subject_collaboration': 'Colaboração',
        'contact.form_subject_other': 'Outro',
        'contact.form_message': 'Mensagem',
        'contact.form_message_placeholder': 'Conte um pouco sobre o que você precisa...',
        'contact.form_submit': 'Enviar Mensagem',
        'contact.social_title': 'Conecte-se Comigo',
        'social.linkedin': 'LinkedIn',
        'social.github': 'GitHub',
        'social.whatsapp': 'WhatsApp',
        'social.email': 'Email',
        'contact.whatsapp_cta': 'Contate-me no WhatsApp',
        'form.sending': 'Enviando...',
        'form.sent_success': 'Mensagem enviada com sucesso!',
        'form.sent_error': 'Erro ao enviar mensagem. Tente novamente.',
        'form.send': 'Enviar',
        'footer.rights': '&copy; {year} Cleiton Vicente Pinheiro. Todos os direitos reservados.',
        'footer.built_with': 'Desenvolvido com ❤️ usando tecnologias modernas'
    },
    en: {
        'meta.title': 'Cleiton Pinheiro - Full Stack Developer | Portfolio',
        'meta.description': 'Full Stack Developer specialized in JavaScript, React, Node.js and Python. Building innovative digital solutions focused on performance and user experience.',
        'meta.og_title': 'Cleiton Pinheiro - Full Stack Developer',
        'meta.og_description': 'Full Stack Developer specialized in JavaScript, React, Node.js and Python.',
        'accessibility.skip_main': 'Skip to main content',
        'accessibility.skip_nav': 'Skip to navigation',
        'nav.role': 'Full Stack Developer',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'home.greeting': "Hi, I'm",
        'home.title': 'Full Stack Developer',
        'home.description': 'I turn ideas into innovative digital solutions. Specialized in modern web development with a focus on user experience and performance.',
        'home.cta_projects': 'View Projects',
        'home.cta_contact': 'Get in Touch',
        'home.available': 'Available for projects',
        'about.title': 'About Me',
        'about.subtitle': 'Get to know my journey and passion for technology',
        'about.stat_experience': 'Years of Experience',
        'about.stat_projects': 'Completed Projects',
        'about.stat_dedication': 'Dedication',
        'about.history_title': 'My Story',
        'about.p1': "I'm a Full Stack Developer with a background in IT infrastructure, combining a solid technical foundation with hands-on software development experience. Moving into development strengthened my problem-solving ability, systems thinking, and focus on building scalable, efficient solutions.",
        'about.p2': 'I build web and mobile applications using JavaScript and TypeScript, working with Node.js on the back end and React Native for cross-platform mobile development. I design REST APIs, implement business rules, integrate with databases, and architect end-to-end systems from front end to back end.',
        'about.p3': "When I'm not coding, I'm a dedicated dad and passionate about soccer and video games. I believe work-life balance is essential for creativity and productivity.",
        'about.highlight_fullstack': 'Full Stack Development',
        'about.highlight_responsive': 'Responsive Design',
        'about.highlight_data': 'Data Management',
        'about.highlight_teamwork': 'Teamwork',
        'about.personal_title': 'Beyond Code',
        'about.cta_contact': "Let's Talk",
        'about.cv_pt': 'Download CV (PT)',
        'about.cv_en': 'Download Resume (EN)',
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'My professional journey and achievements',
        'experience.job1_period': '2021 - Present',
        'experience.job1_title': 'IT Infrastructure Analyst',
        'experience.job1_company': 'Current Company',
        'experience.job1_description': 'Responsible for managing and maintaining IT infrastructure, including servers, networks, and systems. Implementing automated solutions and optimizing processes.',
        'experience.skill_networks': 'Networks',
        'experience.skill_virtualization': 'Virtualization',
        'experience.job2_period': '2022 - Present',
        'experience.job2_title': 'Full Stack Developer',
        'experience.job2_company': 'Freelance Projects',
        'experience.job2_description': 'Building modern web applications using React, Node.js and other technologies. Focus on scalable solutions with excellent user experience.',
        'experience.job3_period': '2023 - Present',
        'experience.job3_title': 'Studies and Certifications',
        'experience.job3_company': 'Continuous Development',
        'experience.job3_description': 'Continuously improving skills through courses, certifications and personal projects. Focused on modern technologies and development best practices.',
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Technologies and tools I work with',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools',
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Some of my latest work',
        'projects.filter_all': 'All',
        'projects.filter_web': 'Web Apps',
        'projects.filter_mobile': 'Mobile',
        'projects.filter_api': 'APIs',
        'projects.cta_text': 'Interested in seeing more?',
        'projects.cta_github': 'View on GitHub',
        'projects.cta_contact': "Let's Talk",
        'projects.view': 'View Project',
        'projects.no_description': 'No description',
        'projects.view_github': 'View on GitHub',
        'contact.title': "Let's Work Together?",
        'contact.subtitle': "I'm always open to new opportunities and interesting projects",
        'contact.email_label': 'Email',
        'contact.send_email': 'Send Email',
        'contact.whatsapp_label': 'WhatsApp',
        'contact.whatsapp_btn': 'Chat',
        'contact.location_label': 'Location',
        'contact.location_value': 'Curitiba, PR - Brazil',
        'contact.availability': 'Available for remote work',
        'contact.form_title': 'Send a Message',
        'contact.form_name': 'Name',
        'contact.form_name_placeholder': 'Your name',
        'contact.form_email': 'Email',
        'contact.form_email_placeholder': 'you@email.com',
        'contact.form_subject': 'Subject',
        'contact.form_subject_placeholder': 'Select a subject',
        'contact.form_subject_freelance': 'Freelance Project',
        'contact.form_subject_job': 'Job Opportunity',
        'contact.form_subject_collaboration': 'Collaboration',
        'contact.form_subject_other': 'Other',
        'contact.form_message': 'Message',
        'contact.form_message_placeholder': 'Tell me a bit about what you need...',
        'contact.form_submit': 'Send Message',
        'contact.social_title': 'Connect with Me',
        'social.linkedin': 'LinkedIn',
        'social.github': 'GitHub',
        'social.whatsapp': 'WhatsApp',
        'social.email': 'Email',
        'contact.whatsapp_cta': 'Contact me on WhatsApp',
        'form.sending': 'Sending...',
        'form.sent_success': 'Message sent successfully!',
        'form.sent_error': 'Error sending message. Try again.',
        'form.send': 'Send',
        'footer.rights': '&copy; {year} Cleiton Vicente Pinheiro. All rights reserved.',
        'footer.built_with': 'Built with ❤️ using modern technologies'
    },
    es: {
        'meta.title': 'Cleiton Pinheiro - Full Stack Developer | Portafolio',
        'meta.description': 'Desarrollador Full Stack especializado en JavaScript, React, Node.js y Python. Creando soluciones digitales innovadoras con enfoque en rendimiento y experiencia de usuario.',
        'meta.og_title': 'Cleiton Pinheiro - Full Stack Developer',
        'meta.og_description': 'Desarrollador Full Stack especializado en JavaScript, React, Node.js y Python.',
        'accessibility.skip_main': 'Saltar al contenido principal',
        'accessibility.skip_nav': 'Saltar a la navegación',
        'nav.role': 'Full Stack Developer',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'home.greeting': 'Hola, soy',
        'home.title': 'Full Stack Developer',
        'home.description': 'Transformo ideas en soluciones digitales innovadoras. Especializado en desarrollo web moderno con enfoque en experiencia de usuario y rendimiento.',
        'home.cta_projects': 'Ver Proyectos',
        'home.cta_contact': 'Contactar',
        'home.available': 'Disponible para proyectos',
        'about.title': 'Sobre mí',
        'about.subtitle': 'Conoce mi trayectoria y pasión por la tecnología',
        'about.stat_experience': 'Años de Experiencia',
        'about.stat_projects': 'Proyectos Completados',
        'about.stat_dedication': 'Dedicación',
        'about.history_title': 'Mi Historia',
        'about.p1': 'Soy Desarrollador Full Stack con experiencia en infraestructura de TI, combinando una base técnica sólida con experiencia práctica en desarrollo de software. Mi transición al desarrollo fortaleció mi capacidad de resolución de problemas, visión sistémica y enfoque en construir soluciones escalables y eficientes.',
        'about.p2': 'Desarrollo aplicaciones web y móviles utilizando JavaScript y TypeScript, trabajando con Node.js en el back-end y React Native en el desarrollo móvil multiplataforma. Construyo APIs REST, implemento reglas de negocio, integro bases de datos y estructuro sistemas de punta a punta.',
        'about.p3': 'Cuando no estoy programando, soy un padre dedicado y me apasionan el fútbol y los videojuegos. Creo que el equilibrio entre vida personal y profesional es esencial para la creatividad y la productividad.',
        'about.highlight_fullstack': 'Desarrollo Full Stack',
        'about.highlight_responsive': 'Diseño Responsivo',
        'about.highlight_data': 'Gestión de Datos',
        'about.highlight_teamwork': 'Trabajo en Equipo',
        'about.personal_title': 'Más allá del Código',
        'about.cta_contact': 'Hablemos',
        'about.cv_pt': 'Descargar CV (PT)',
        'about.cv_en': 'Descargar CV (EN)',
        'experience.title': 'Experiencia Profesional',
        'experience.subtitle': 'Mi trayectoria profesional y logros',
        'experience.job1_period': '2021 - Presente',
        'experience.job1_title': 'Analista de Infraestructura de TI',
        'experience.job1_company': 'Empresa Actual',
        'experience.job1_description': 'Responsable de la gestión y mantenimiento de la infraestructura de TI, incluyendo servidores, redes y sistemas. Implementación de soluciones automatizadas y optimización de procesos.',
        'experience.skill_networks': 'Redes',
        'experience.skill_virtualization': 'Virtualización',
        'experience.job2_period': '2022 - Presente',
        'experience.job2_title': 'Desarrollador Full Stack',
        'experience.job2_company': 'Proyectos Freelance',
        'experience.job2_description': 'Desarrollo de aplicaciones web modernas utilizando React, Node.js y otras tecnologías. Enfoque en crear soluciones escalables con excelente experiencia de usuario.',
        'experience.job3_period': '2023 - Presente',
        'experience.job3_title': 'Estudios y Certificaciones',
        'experience.job3_company': 'Desarrollo Continuo',
        'experience.job3_description': 'Mejorando constantemente habilidades mediante cursos, certificaciones y proyectos personales. Enfoque en tecnologías modernas y mejores prácticas de desarrollo.',
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologías y herramientas que domino',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Herramientas',
        'projects.title': 'Proyectos Destacados',
        'projects.subtitle': 'Algunos de mis trabajos más recientes',
        'projects.filter_all': 'Todos',
        'projects.filter_web': 'Web Apps',
        'projects.filter_mobile': 'Mobile',
        'projects.filter_api': 'APIs',
        'projects.cta_text': '¿Te interesa ver más?',
        'projects.cta_github': 'Ver en GitHub',
        'projects.cta_contact': 'Hablemos',
        'projects.view': 'Ver Proyecto',
        'projects.no_description': 'Sin descripción',
        'projects.view_github': 'Ver en GitHub',
        'contact.title': '¿Trabajamos Juntos?',
        'contact.subtitle': 'Siempre estoy abierto a nuevas oportunidades y proyectos interesantes',
        'contact.email_label': 'Email',
        'contact.send_email': 'Enviar Email',
        'contact.whatsapp_label': 'WhatsApp',
        'contact.whatsapp_btn': 'Conversar',
        'contact.location_label': 'Ubicación',
        'contact.location_value': 'Curitiba, PR - Brasil',
        'contact.availability': 'Disponible para trabajo remoto',
        'contact.form_title': 'Enviar un Mensaje',
        'contact.form_name': 'Nombre',
        'contact.form_name_placeholder': 'Tu nombre',
        'contact.form_email': 'Email',
        'contact.form_email_placeholder': 'tu@email.com',
        'contact.form_subject': 'Asunto',
        'contact.form_subject_placeholder': 'Selecciona un asunto',
        'contact.form_subject_freelance': 'Proyecto Freelance',
        'contact.form_subject_job': 'Oportunidad Laboral',
        'contact.form_subject_collaboration': 'Colaboración',
        'contact.form_subject_other': 'Otro',
        'contact.form_message': 'Mensaje',
        'contact.form_message_placeholder': 'Cuéntame un poco sobre lo que necesitas...',
        'contact.form_submit': 'Enviar Mensaje',
        'contact.social_title': 'Conéctate Conmigo',
        'social.linkedin': 'LinkedIn',
        'social.github': 'GitHub',
        'social.whatsapp': 'WhatsApp',
        'social.email': 'Email',
        'contact.whatsapp_cta': 'Contáctame en WhatsApp',
        'form.sending': 'Enviando...',
        'form.sent_success': '¡Mensaje enviado!',
        'form.sent_error': 'Error al enviar. Inténtalo de nuevo.',
        'form.send': 'Enviar',
        'footer.rights': '&copy; {year} Cleiton Vicente Pinheiro. Todos los derechos reservados.',
        'footer.built_with': 'Desarrollado con ❤️ usando tecnologías modernas'
    }
};

const TYPED = {
    pt: ["Desenvolvedor", "Programador", "Criador"],
    en: ["Developer", "Programmer", "Creator"],
    es: ["Desarrollador", "Programador", "Creador"]
};

const CV_FILES = {
    pt: 'Cleiton Pinheiro CV PT.pdf',
    en: 'Cleiton Pinheiro CV EN.pdf'
};

let currentLang = 'pt';
let typeWriterInstance = null;
let currentTheme = 'light';

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

    const browserLang = navigator.language || '';

    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('es')) return 'es';

    return 'en';
}

function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.querySelector('.theme-dropdown .dropdown-toggle i:not(.fa-chevron-down)');
    if (icon) icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function initThemeToggle() {
    currentTheme = getTheme();
    applyTheme(currentTheme);
    const options = document.querySelectorAll('.theme-option');
    const themeDropdown = document.querySelector('.theme-dropdown');
    const themeLabel = themeDropdown ? themeDropdown.querySelector('.dropdown-label') : null;
    const updateThemeLabel = (val) => {
        if (!themeLabel) return;
        themeLabel.textContent = val === 'dark' ? 'Escuro' : val === 'light' ? 'Claro' : 'Sistema';
    };
    const markActive = (val) => {
        options.forEach(o => o.classList.toggle('active', o.dataset.theme === val));
    };
    updateThemeLabel(localStorage.getItem('theme') || 'system');
    markActive(localStorage.getItem('theme') || 'system');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const val = opt.dataset.theme;
            localStorage.setItem('theme', val);
            if (val === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                applyTheme(prefersDark ? 'dark' : 'light');
                const mm = window.matchMedia('(prefers-color-scheme: dark)');
                const handler = () => applyTheme(mm.matches ? 'dark' : 'light');
                mm.addEventListener('change', handler, { once: true });
            } else {
                applyTheme(val);
            }
            updateThemeLabel(val);
            markActive(val);
            const dd = opt.closest('.dropdown');
            if (dd) dd.classList.remove('show');
        });
    });
}

function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.pt;
    const fallback = I18N.pt || {};
    const htmlLang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
    document.documentElement.setAttribute('lang', htmlLang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = dict[key] ?? fallback[key];
        if (!t) return;

        if (el.tagName === 'META') {
            el.setAttribute('content', t);
            return;
        }

        if (el.tagName === 'TITLE') {
            document.title = t;
            return;
        }

        const processed = String(t).replace(/\{year\}/g, String(new Date().getFullYear()));
        el.innerHTML = processed;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const t = dict[key] ?? fallback[key];
        if (!t) return;
        el.setAttribute('placeholder', t);
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
    const flags = document.querySelectorAll(".lang-option");

    currentLang = getLang();
    applyTranslations(currentLang);
    updateTyped(currentLang);

    const langDropdown = document.querySelector('.lang-dropdown');
    const langButton = langDropdown ? langDropdown.querySelector('.dropdown-toggle') : null;
    const langFlag = langDropdown ? langDropdown.querySelector('.dropdown-toggle .flag') : null;
    const updateLangButton = () => {
        if (!langButton || !langFlag) return;
        if (currentLang === 'pt') { langFlag.src = 'pt-br.png'; langFlag.alt = 'Português'; }
        else if (currentLang === 'en') { langFlag.src = 'us.png'; langFlag.alt = 'English'; }
        else { langFlag.src = 'es.png'; langFlag.alt = 'Español'; }
    };
    updateLangButton();
    flags.forEach(f => f.classList.toggle('active', f.dataset.lang === currentLang));

    flags.forEach(flag => {
        const lang = flag.dataset.lang;

        // marcar ativo
        if (lang === currentLang) flag.classList.add("active");

        flag.addEventListener("click", () => {
            // remover ativo de todas
            flags.forEach(f => f.classList.remove("active"));

            // ativar clicada
            flag.classList.add("active");

            currentLang = lang;
            localStorage.setItem("lang", currentLang);

            applyTranslations(currentLang);
            updateTyped(currentLang);
            updateLangButton();

            // 🔥 re-renderiza textos dinâmicos
            renderProjects();
            fetchGitHubRepos();
            setupWhatsAppLink();

            const dd = flag.closest('.dropdown');
            if (dd) dd.classList.remove('show');
        });
    });

    const toggles = document.querySelectorAll('.dropdown-toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dd = btn.closest('.dropdown');
            document.querySelectorAll('.dropdown.show').forEach(d => {
                if (d !== dd) d.classList.remove('show');
            });
            dd.classList.toggle('show');
        });
    });
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown.show').forEach(d => d.classList.remove('show'));
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown.show').forEach(d => d.classList.remove('show'));
        }
    });
}

async function initCVButtons() {
    const btnPt = document.querySelector('.cv-btn-pt');
    const btnEn = document.querySelector('.cv-btn-en');
    if (btnPt) btnPt.href = CV_FILES.pt;
    if (btnEn) btnEn.href = CV_FILES.en;
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

    projectsContainer.innerHTML = '';

    CONFIG.PROJECTS.forEach(({ title, description, technologies, link }) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="project-tech">
                ${technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${link}" class="btn" target="_blank">
                ${I18N[currentLang]['projects.view']}
            </a>
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

    whatsappLink.innerHTML = `<i class="fab fa-whatsapp"></i> ${I18N[currentLang]['contact.whatsapp_cta']}`;
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

async function trackVisit() {
    try {
        await fetch('/api/visits/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: window.location.pathname,
                lang: currentLang,
                ref: document.referrer || undefined,
            }),
        });
    } catch (_) { }
}

// Função para Inicializar o Portfólio
function initPortfolio() {
    initLangSelector();
    initThemeToggle();
    trackVisit();
    initScrollSpy();
    renderSkillBars();
    renderProjects();
    fetchGitHubRepos();
    setupContactForm();
    initCVButtons();
}

function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-link[data-section]'));
    const sections = links
        .map(l => document.getElementById(l.getAttribute('data-section')))
        .filter(Boolean);

    const update = () => {
        const fromTop = window.scrollY + 140;
        let currentId = null;
        for (const sec of sections) {
            if (sec.offsetTop <= fromTop) currentId = sec.id;
        }
        links.forEach(l => {
            const isActive = l.getAttribute('data-section') === currentId;
            l.classList.toggle('active', isActive);
        });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    const navbar = document.getElementById('navbar');
    const navUpdate = () => {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 8);
    };
    navUpdate();
    window.addEventListener('scroll', navUpdate, { passive: true });
}

// Adicionar Evento de Carregamento do DOM
document.addEventListener('DOMContentLoaded', initPortfolio);
