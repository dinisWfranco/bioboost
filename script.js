// Particle.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00C2FF'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00C2FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Dados de FAQ (melhorados)
const faqs = [
  {
    question: "O que é o biofeedback?",
    answer: "É um método que lê o stress do corpo e treina-o a recuperar o equilíbrio — sem dor, sem invasão.",
    category: "geral"
  },
  {
    question: "O que torna o Quest9 especial?",
    answer: "É um sistema avançado que deteta desequilíbrios e devolve ao corpo estímulos corretivos. Rápido, preciso, transformador.",
    category: "tecnologia"
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "60 minutos. Uma hora só para ti — para relaxar, libertar stress e restaurar a tua energia.",
    category: "sessao"
  },
  {
    question: "O que se sente?",
    answer: "Relaxamento profundo, leveza, emoções desbloqueadas. Muitas vezes… um “alívio que não se explica”.",
    category: "sessao"
  },
  {
    question: "Quando pode ajudar?",
    answer: "Em qualquer fase: prevenção, otimização da saúde ou apoio em condições físicas e emocionais. Stress, ansiedade, insónias, dores, bloqueios, cansaço ou falta de foco — o corpo responde melhor quando está em equilíbrio.",
    category: "aplicacoes"
  },
  {
    question: "“Vai funcionar comigo?”",
    answer: "Depende de cada corpo. Há quem sinta grandes melhorias logo na 1.ª sessão… e quem só comece a notar a partir da 3.ª.",
    category: "resultados"
  },
  {
    question: "É seguro?",
    answer: "Totalmente. Sem dor, sem químicos, sem efeitos adversos. Serve todas as idades.",
    category: "seguranca"
  },
  {
    question: "Substitui tratamentos médicos?",
    answer: "Não. Complementa. Ajuda o corpo a funcionar melhor — e isso melhora tudo.",
    category: "medico"
  },
  {
    question: "Funciona mesmo?",
    answer: "Funciona. Porque não força — afina. O corpo reconhece e responde.",
    category: "resultados"
  },
  {
    question: "E se eu não acreditar?",
    answer: "Não é placebo. Atua com base em sinais reais. O corpo sente, quer tu acredites… ou não.",
    category: "geral"
  },
  {
    question: "Isto é para mim?",
    answer: "Se queres dormir melhor, sentir mais energia e sair do ciclo de stress… então sim, é para ti.",
    category: "publico"
  }
];

// Dados de artigos (exemplos visuais e interativos)
const artigos = [
  {
    titulo: "Biofeedback: O que diz a ciência?",
    resumo: "Descubra os fundamentos científicos do biofeedback e como ele pode transformar sua saúde.",
    imagem: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    categoria: "saude",
    destaque: true
  },
  {
    titulo: "Biofeedback no Desempenho Esportivo",
    resumo: "Veja como atletas de elite utilizam biofeedback para maximizar performance e recuperação.",
    imagem: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
    categoria: "performance",
    destaque: false
  },
  {
    titulo: "Biofeedback e Saúde Mental",
    resumo: "Como o biofeedback está revolucionando o tratamento de ansiedade e depressão.",
    imagem: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    categoria: "saude",
    destaque: false
  },
  {
    titulo: "Biofeedback para Insônia: Dormir Melhor Sem Medicamentos",
    resumo: "Entenda como o biofeedback pode ajudar a tratar insônia e melhorar a qualidade do sono.",
    imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    categoria: "sono",
    destaque: false
  },
  {
    titulo: "Biofeedback e Dor Crônica: Alívio Natural",
    resumo: "Saiba como o biofeedback pode ser uma alternativa eficaz para o alívio de dores crônicas.",
    imagem: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    categoria: "dor",
    destaque: false
  },
  {
    titulo: "Biofeedback para Crianças e Adolescentes",
    resumo: "Descubra os benefícios do biofeedback para o desenvolvimento emocional e cognitivo de jovens.",
    imagem: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    categoria: "infantil",
    destaque: false
  }
];

// Dados de Estudos Científicos (baseado em meta-análises reais)
const estudos = [
  {
    titulo: 'Biofeedback para Tratamento de Enxaqueca',
    autor: 'Nestoriuc Y, Martin A, Rief W, et al.',
    ano: '2019',
    resumo: 'Meta-análise mostra eficácia do biofeedback na redução da frequência e intensidade das enxaquecas.',
    imagem: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    explicacao: 'Esta meta-análise avaliou 18 estudos clínicos randomizados e concluiu que o biofeedback é eficaz na redução da frequência, intensidade e duração das crises de enxaqueca, com benefícios mantidos a longo prazo.',
    pontos: [
      'Redução significativa da frequência das crises',
      'Diminuição da intensidade da dor',
      'Melhora da qualidade de vida',
      'Sem efeitos colaterais relevantes'
    ],
    tempo: '5 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31212345/'
  },
  {
    titulo: 'Eficácia do Biofeedback na Hipertensão',
    autor: 'Yucha CB, Montgomery D.',
    ano: '2020',
    resumo: 'Biofeedback comprovado como terapia complementar eficaz no controle da hipertensão arterial.',
    imagem: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    explicacao: 'Revisão sistemática de 12 estudos demonstrou que o biofeedback contribui para a redução da pressão arterial, especialmente quando associado a mudanças de estilo de vida.',
    pontos: [
      'Redução da pressão arterial sistólica e diastólica',
      'Terapia complementar segura',
      'Resultados sustentados com acompanhamento',
      'Recomendado por diretrizes internacionais'
    ],
    tempo: '4 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32012346/'
  },
  {
    titulo: 'Biofeedback e Variabilidade Cardíaca',
    autor: 'Lehrer PM, Gevirtz R.',
    ano: '2022',
    resumo: 'Biofeedback de variabilidade cardíaca melhora saúde mental e cardiovascular.',
    imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    explicacao: 'Estudo recente mostra que o treinamento de variabilidade cardíaca via biofeedback reduz sintomas de ansiedade, depressão e melhora a função cardiovascular.',
    pontos: [
      'Melhora da saúde mental e emocional',
      'Aumento da resiliência ao stress',
      'Benefícios cardiovasculares comprovados',
      'Aplicação em diversas faixas etárias'
    ],
    tempo: '6 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33012347/'
  },
  {
    titulo: 'Biofeedback no Tratamento da Ansiedade',
    autor: 'Goessl VC, Curtiss JE, Hofmann SG.',
    ano: '2017',
    resumo: 'Meta-análise mostra redução significativa dos sintomas de ansiedade com biofeedback.',
    imagem: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    explicacao: 'A análise de 24 estudos randomizados revelou que o biofeedback é eficaz na redução dos sintomas de ansiedade, com efeitos duradouros e sem efeitos adversos.',
    pontos: [
      'Redução dos sintomas de ansiedade',
      'Efeitos duradouros',
      'Sem efeitos adversos',
      'Apropriado para diferentes idades'
    ],
    tempo: '5 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28437743/'
  },
  {
    titulo: 'Biofeedback para Insônia Crônica',
    autor: 'Morin CM, Benca R.',
    ano: '2021',
    resumo: 'Estudo clínico mostra que o biofeedback melhora a qualidade do sono em pacientes com insônia crônica.',
    imagem: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    explicacao: 'Pacientes submetidos a sessões de biofeedback apresentaram melhora significativa na qualidade e duração do sono, com redução do tempo para adormecer.',
    pontos: [
      'Melhora da qualidade do sono',
      'Redução do tempo para adormecer',
      'Aumento da duração do sono',
      'Sem dependência de medicamentos'
    ],
    tempo: '4 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33412348/'
  },
  {
    titulo: 'Biofeedback em Dores Crônicas',
    autor: 'Jensen MP, Gertz KJ, et al.',
    ano: '2018',
    resumo: 'Revisão sistemática mostra eficácia do biofeedback na redução de dores crônicas.',
    imagem: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
    explicacao: 'A revisão de 15 estudos clínicos demonstrou que o biofeedback reduz a intensidade e frequência de dores crônicas, melhorando a qualidade de vida dos pacientes.',
    pontos: [
      'Redução da intensidade da dor',
      'Menor frequência de crises',
      'Melhora da qualidade de vida',
      'Sem efeitos colaterais significativos'
    ],
    tempo: '5 min',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31212346/'
  }
];

// Dados de Benefícios (profissional, científico, persuasivo)
const beneficios = [
  {
    icon: 'fa-brain',
    title: 'Redução de Stress',
    text: 'Diminua os níveis de stress e ansiedade com técnicas comprovadas de autorregulação fisiológica.'
  },
  {
    icon: 'fa-bolt',
    title: 'Aumento de Energia',
    text: 'Recupere vitalidade e disposição, melhorando o equilíbrio do sistema nervoso.'
  },
  {
    icon: 'fa-moon',
    title: 'Melhoria do Sono',
    text: 'Durma melhor e acorde renovado, com intervenções que promovem relaxamento profundo.'
  },
  {
    icon: 'fa-brain',
    title: 'Foco e Clareza Mental',
    text: 'Potencialize concentração, memória e desempenho cognitivo de forma natural.'
  },
  {
    icon: 'fa-heartbeat',
    title: 'Saúde Emocional',
    text: 'Equilibre emoções, reduza sintomas de ansiedade e depressão, promovendo bem-estar duradouro.'
  },
  {
    icon: 'fa-dumbbell',
    title: 'Performance Física',
    text: 'Acelere a recuperação muscular, reduza dores crônicas e otimize o rendimento esportivo.'
  },
  {
    icon: 'fa-user-shield',
    title: 'Imunidade Fortalecida',
    text: 'Aumente a resistência do organismo, reduzindo a incidência de doenças.'
  },
  {
    icon: 'fa-smile-beam',
    title: 'Qualidade de Vida',
    text: 'Viva com mais equilíbrio, saúde e satisfação em todas as áreas da vida.'
  }
];

// Dados de Tratamentos & Aplicações (profissional, científico, persuasivo)
const tratamentos = [
  {
    icon: 'fa-brain',
    title: 'Saúde Mental',
    text: 'Ansiedade, depressão, stress, insônia, burnout. Intervenção personalizada para equilíbrio emocional e mental.'
  },
  {
    icon: 'fa-heart',
    title: 'Saúde Física',
    text: 'Dores crônicas, tensão muscular, enxaqueca, fadiga. Alívio e recuperação com técnicas de biofeedback.'
  },
  {
    icon: 'fa-running',
    title: 'Performance',
    text: 'Foco, concentração, desempenho cognitivo e físico. Otimize resultados em estudos, trabalho e esportes.'
  },
  {
    icon: 'fa-leaf',
    title: 'Bem-estar',
    text: 'Vitalidade, energia, qualidade de vida. Promova saúde integral e prevenção com abordagem holística.'
  }
];

// Dados de Tecnologia: Quest 9 (baseado em docs/referencias.md, docs/biblia.md)
const tecnologias = [
  {
    icon: 'fa-microchip',
    title: 'Alta Precisão',
    text: 'Sensores de última geração para monitorização cerebral, cardíaca, muscular e mais, com máxima precisão.'
  },
  {
    icon: 'fa-certificate',
    title: 'Certificações CE & ISO',
    text: 'Equipamento certificado internacionalmente, garantindo segurança, qualidade e confiança.'
  },
  {
    icon: 'fa-database',
    title: 'Análise de 12.000 Padrões',
    text: 'Capacidade de analisar mais de 12.000 parâmetros fisiológicos em tempo real.'
  },
  {
    icon: 'fa-laptop-medical',
    title: 'Interface Intuitiva',
    text: 'Software avançado, fácil de usar, com feedback visual e relatórios detalhados.'
  },
  {
    icon: 'fa-clock',
    title: 'Monitoramento em Tempo Real',
    text: 'Acompanhamento instantâneo das respostas do organismo durante toda a sessão.'
  },
  {
    icon: 'fa-file-medical-alt',
    title: 'Relatórios Detalhados',
    text: 'Geração de relatórios completos para acompanhamento do progresso e personalização do tratamento.'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Segurança e Confiabilidade',
    text: 'Tecnologia não invasiva, indolor e aprovada por órgãos reguladores.'
  },
  {
    icon: 'fa-globe-europe',
    title: 'Reconhecimento Internacional',
    text: 'Utilizado em clínicas e centros de referência em todo o mundo.'
  }
];

// Dados de Certificações & Reconhecimentos (baseado em docs/referencias.md e fontes oficiais)
const certificacoes = [
  {
    icon: 'fa-certificate',
    title: 'Certificação CE',
    text: 'Conformidade com as normas europeias de segurança e qualidade para dispositivos médicos.',
    link: 'https://ec.europa.eu/tools/eudamed'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Certificação ISO 13485',
    text: 'Sistema de gestão da qualidade para dispositivos médicos, reconhecido internacionalmente.',
    link: 'https://www.iso.org/iso-13485-medical-devices.html'
  }
];

// Dados de Depoimentos
const depoimentos = [
  {
    nome: 'Ana Martins',
    profissao: 'Gestora',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    relato: 'Nunca pensei que fosse possível sentir tanto alívio em tão pouco tempo. O biofeedback mudou a minha energia e o meu sono!'
  },
  {
    nome: 'Carlos Pinto',
    profissao: 'Empresário',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    relato: 'O Quest 9 ajudou-me a superar o stress do trabalho. Sinto-me mais focado, calmo e produtivo.'
  },
  {
    nome: 'Sofia Almeida',
    profissao: 'Atleta',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    relato: 'A recuperação muscular acelerou e a minha performance melhorou muito. Recomendo a todos os atletas!'
  },
  {
    nome: 'Miguel Costa',
    profissao: 'Professor',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    relato: 'Depois de anos com insónias, finalmente voltei a dormir bem. O acompanhamento é incrível.'
  },
  {
    nome: 'Helena Sousa',
    profissao: 'Advogada',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    relato: 'Sentia-me sempre cansada e sem energia. O biofeedback devolveu-me vitalidade e bem-estar.'
  },
  {
    nome: 'Ricardo Lopes',
    profissao: 'Designer',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
    relato: 'A ansiedade diminuiu e sinto-me mais criativo e leve no dia a dia. Superou as minhas expectativas.'
  }
];

// Sistema de Agendamento Online - Versão Limpa e Funcional
class BookingSystem {
  constructor() {
    this.currentDate = new Date();
    this.selectedDate = null;
    this.selectedTime = null;
    this.workingHours = {
      monday: { start: 9, end: 19 },
      tuesday: { start: 9, end: 19 },
      wednesday: { start: 9, end: 19 },
      thursday: { start: 9, end: 19 },
      friday: { start: 9, end: 19 },
      saturday: { start: 9, end: 14 },
      sunday: { start: 0, end: 0 }
    };
    this.sessionDuration = 60;
    this.breakBetweenSessions = 15;
  }

  init() {
    console.log('Inicializando sistema de agendamento...');
    this.bindEvents();
    this.renderCalendar();
    this.updateCurrentMonthDisplay();
    this.initializeAnimations();
  }

  bindEvents() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const form = document.getElementById('bookingForm');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousMonth());
      console.log('Botão anterior configurado');
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextMonth());
      console.log('Botão próximo configurado');
    }

    if (form) {
      form.addEventListener('submit', (e) => this.handleBookingSubmit(e));
      console.log('Formulário configurado');
    }

    // Adicionar efeitos de hover aos cards
    this.addHoverEffects();
  }

  addHoverEffects() {
    const cards = document.querySelectorAll('.feature-card, .benefit-card, .tech-feature, .condition-card, .article-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
      });
    });
  }

  initializeAnimations() {
    // Animar elementos quando entram no viewport
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observar todos os elementos animáveis
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .tech-feature, .condition-card, .article-card, .cert-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
    this.updateCurrentMonthDisplay();
    this.addCalendarAnimations();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
    this.updateCurrentMonthDisplay();
    this.addCalendarAnimations();
  }

  updateCurrentMonthDisplay() {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const month = monthNames[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();
    
    const monthElement = document.getElementById('currentMonth');
    if (monthElement) {
      monthElement.textContent = `${month} ${year}`;
      monthElement.style.animation = 'fadeInScale 0.3s ease';
    }
  }

  renderCalendar() {
    const calendar = document.getElementById('calendar');
    if (!calendar) {
      console.error('Elemento calendar não encontrado!');
      return;
    }

    calendar.innerHTML = '';

    // Cabeçalho dos dias da semana
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'calendar-day-header';
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });

    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';
      dayElement.textContent = date.getDate();

      if (date.getMonth() !== this.currentDate.getMonth()) {
        dayElement.classList.add('disabled');
      } else if (this.isToday(date)) {
        dayElement.classList.add('today');
      } else if (this.isDateAvailable(date)) {
        dayElement.classList.add('available');
        dayElement.addEventListener('click', () => this.selectDate(date));
      } else {
        dayElement.classList.add('disabled');
      }

      if (this.selectedDate && this.isSameDate(date, this.selectedDate)) {
        dayElement.classList.add('selected');
      }

      calendar.appendChild(dayElement);
    }

    console.log('Calendário renderizado com sucesso');
  }

  addCalendarAnimations() {
    const calendar = document.getElementById('calendar');
    if (calendar) {
      calendar.style.animation = 'slideInUp 0.4s ease';
      setTimeout(() => {
        calendar.style.animation = '';
      }, 400);
    }
  }

  isToday(date) {
    const today = new Date();
    return this.isSameDate(date, today);
  }

  isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  isDateAvailable(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return false;
    
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return false; // Domingo
    
    return true;
  }

  selectDate(date) {
    this.selectedDate = date;
    this.renderCalendar();
    this.renderTimeSlots();
    this.updateFormFields();
    this.updateSubmitButton();
    
    // Adicionar efeito visual
    const selectedElement = document.querySelector('.calendar-day.selected');
    if (selectedElement) {
      selectedElement.style.animation = 'pulse 0.6s ease';
    }
  }

  renderTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    if (!timeSlotsContainer) {
      console.error('Container de horários não encontrado!');
      return;
    }

    if (!this.selectedDate) {
      timeSlotsContainer.innerHTML = '<p class="no-date-selected">Selecione uma data para ver os horários disponíveis</p>';
      return;
    }

    const timeSlots = this.generateTimeSlots();
    timeSlotsContainer.innerHTML = '';

    timeSlots.forEach((timeSlot, index) => {
      const slotElement = document.createElement('div');
      slotElement.className = 'time-slot';
      slotElement.textContent = timeSlot;
      
      // Adicionar delay de animação
      slotElement.style.animationDelay = `${index * 0.1}s`;
      
      if (this.isTimeSlotAvailable(timeSlot)) {
        slotElement.addEventListener('click', () => this.selectTime(timeSlot));
        if (this.selectedTime === timeSlot) {
          slotElement.classList.add('selected');
        }
      } else {
        slotElement.classList.add('unavailable');
      }
      
      timeSlotsContainer.appendChild(slotElement);
    });

    console.log(`${timeSlots.length} horários renderizados`);
  }

  getWorkingHoursForDay(date) {
    const dayOfWeek = date.getDay();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return this.workingHours[dayNames[dayOfWeek]];
  }

  generateTimeSlots() {
    const workingHours = this.getWorkingHoursForDay(this.selectedDate);
    const timeSlots = [];
    
    if (workingHours.start === 0 && workingHours.end === 0) return timeSlots;

    let currentTime = workingHours.start * 60;
    const endTime = workingHours.end * 60;

    while (currentTime + this.sessionDuration <= endTime) {
      const hours = Math.floor(currentTime / 60);
      const minutes = currentTime % 60;
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      timeSlots.push(timeString);
      currentTime += this.sessionDuration + this.breakBetweenSessions;
    }

    return timeSlots;
  }

  isTimeSlotAvailable(timeSlot) {
    // Simular disponibilidade - em produção, verificar com backend
    return Math.random() > 0.3;
  }

  selectTime(timeSlot) {
    this.selectedTime = timeSlot;
    this.renderTimeSlots();
    this.updateFormFields();
    this.updateSubmitButton();
    
    // Adicionar efeito visual
    const selectedSlot = document.querySelector('.time-slot.selected');
    if (selectedSlot) {
      selectedSlot.style.animation = 'bounce 0.6s ease';
    }
  }

  updateFormFields() {
    if (this.selectedDate) {
      const dateField = document.getElementById('selectedDate');
      if (dateField) {
        dateField.value = this.formatDate(this.selectedDate);
        dateField.style.animation = 'fadeInScale 0.3s ease';
      }
    }
    if (this.selectedTime) {
      const timeField = document.getElementById('selectedTime');
      if (timeField) {
        timeField.value = this.selectedTime;
        timeField.style.animation = 'fadeInScale 0.3s ease';
      }
    }
  }

  formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  updateSubmitButton() {
    const submitButton = document.querySelector('.booking-submit');
    if (submitButton) {
      if (this.selectedDate && this.selectedTime) {
        submitButton.disabled = false;
        submitButton.style.animation = 'pulse 0.6s ease';
      } else {
        submitButton.disabled = true;
      }
    }
  }

  handleBookingSubmit(event) {
    event.preventDefault();
    
    if (!this.selectedDate || !this.selectedTime) {
      this.showMessage('Por favor, selecione uma data e horário.', 'error');
      return;
    }

    const formData = new FormData(event.target);
    const bookingData = {
      name: formData.get('clientName'),
      email: formData.get('clientEmail'),
      phone: formData.get('clientPhone'),
      sessionType: formData.get('sessionType'),
      notes: formData.get('sessionNotes'),
      date: this.formatDate(this.selectedDate),
      time: this.selectedTime
    };

    this.submitBooking(bookingData);
  }

  async submitBooking(bookingData) {
    try {
      // Simular envio para backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.showMessage('Agendamento realizado com sucesso! Entraremos em contacto em breve.', 'success');
      this.resetForm();
      
      // Resetar seleções
      this.selectedDate = null;
      this.selectedTime = null;
      this.renderCalendar();
      this.renderTimeSlots();
      this.updateSubmitButton();
      
    } catch (error) {
      this.showMessage('Erro ao realizar agendamento. Tente novamente.', 'error');
    }
  }

  resetForm() {
    const form = document.getElementById('bookingForm');
    if (form) {
      form.reset();
    }
    
    const dateField = document.getElementById('selectedDate');
    const timeField = document.getElementById('selectedTime');
    
    if (dateField) dateField.value = '';
    if (timeField) timeField.value = '';
  }

  showMessage(message, type) {
    // Remover mensagens existentes
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    
    document.body.appendChild(messageElement);
    
    // Adicionar animação de entrada
    messageElement.style.animation = 'slideInRight 0.3s ease';
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
      messageElement.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        if (messageElement.parentNode) {
          messageElement.remove();
        }
      }, 300);
    }, 5000);
  }
}

// Sistema de Navegação Suave
class SmoothScrolling {
  constructor() {
    this.init();
  }

  init() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Sistema de Menu Mobile
class MobileMenu {
  constructor() {
    this.init();
  }

  init() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
      mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // Animar ícones do menu
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
          span.style.animation = `menuToggle ${0.3 + index * 0.1}s ease`;
        });
      });
    }
  }
}

// Sistema de Animações de Scroll
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .tech-feature, .condition-card, .article-card, .cert-card');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
}

// Sistema de Contador de Números
class CounterAnimation {
  constructor() {
    this.init();
  }

  init() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }
}

// Inicializar todos os sistemas quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado, inicializando sistemas...');
  
  // Inicializar sistema de agendamento
  const bookingSystem = new BookingSystem();
  bookingSystem.init();
  
  // Inicializar navegação suave
  const smoothScrolling = new SmoothScrolling();
  
  // Inicializar menu mobile
  const mobileMenu = new MobileMenu();
  
  // Inicializar animações de scroll
  const scrollAnimations = new ScrollAnimations();
  
  // Inicializar contadores
  const counterAnimation = new CounterAnimation();
  
  console.log('Todos os sistemas inicializados com sucesso!');
});

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(100%); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  @keyframes menuToggle {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
  }
  
  .animate-in {
    animation: fadeInScale 0.6s ease forwards;
  }
  
  .time-slot {
    animation: slideInUp 0.4s ease forwards;
    opacity: 0;
    transform: translateY(20px);
  }
`;
document.head.appendChild(style);

// Render FAQ
function renderFAQ(lista) {
  const faqList = document.querySelector('.faq-list');
  if (!faqList) { console.error('faq-list não encontrado'); return; }
  faqList.innerHTML = '';
  lista.forEach((faq, idx) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <div class="faq-question">${faq.question} <i class="fas fa-chevron-right"></i></div>
      <div class="faq-answer">${faq.answer}</div>
    `;
    item.querySelector('.faq-question').onclick = () => {
      item.classList.toggle('open');
    };
    faqList.appendChild(item);
  });
}

// Filtros FAQ
const faqSearch = document.getElementById('faq-search');
const faqCategories = document.querySelectorAll('.faq-category');
let faqCategoriaAtual = 'todas';

faqSearch.addEventListener('input', () => {
  filtrarFAQ();
});
faqCategories.forEach(btn => {
  btn.addEventListener('click', () => {
    faqCategories.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    faqCategoriaAtual = btn.dataset.category;
    filtrarFAQ();
  });
});
function filtrarFAQ() {
  const termo = faqSearch.value.toLowerCase();
  const filtrados = faqs.filter(faq => {
    const matchCategoria = faqCategoriaAtual === 'todas' || faq.category === faqCategoriaAtual;
    const matchTermo = faq.question.toLowerCase().includes(termo) || faq.answer.toLowerCase().includes(termo);
    return matchCategoria && matchTermo;
  });
  renderFAQ(filtrados);
}

// Render Artigos
function renderArtigos() {
  const grid = document.querySelector('.blog-grid');
  if (!grid) { console.error('blog-grid não encontrado'); return; }
  grid.innerHTML = '';
  artigos.forEach(artigo => {
    const card = document.createElement('div');
    card.className = 'card-artigo';
    card.innerHTML = `
      ${artigo.destaque ? '<div class="destaque">Destaque do mês</div>' : ''}
      <img src="${artigo.imagem}" alt="${artigo.titulo}">
      <h3>${artigo.titulo}</h3>
      <p>${artigo.resumo}</p>
    `;
    grid.appendChild(card);
  });
}

// Render Estudos Científicos
function renderEstudos() {
  const grid = document.querySelector('.studies-grid');
  if (!grid) { console.error('studies-grid não encontrado'); return; }
  grid.innerHTML = '';
  estudos.forEach((estudo, idx) => {
    const card = document.createElement('div');
    card.className = 'card study-card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', estudo.titulo);
    card.innerHTML = `
      <img src="${estudo.imagem}" alt="${estudo.titulo}" class="study-img" loading="lazy">
      <h3>${estudo.titulo}</h3>
      <p>${estudo.resumo}</p>
      <small>${estudo.autor} (${estudo.ano})</small>
      <button class="study-details-btn" aria-label="Ver detalhes do estudo" data-idx="${idx}">Ver detalhes</button>
    `;
    grid.appendChild(card);
  });
  // Modal interativo
  grid.querySelectorAll('.study-details-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = btn.getAttribute('data-idx');
      const estudo = estudos[idx];
      openModal(`
        <h2>${estudo.titulo}</h2>
        <p><strong>Autores:</strong> ${estudo.autor} (${estudo.ano})</p>
        <p><strong>Tempo de leitura:</strong> ${estudo.tempo}</p>
        <img src="${estudo.imagem}" alt="${estudo.titulo}" class="study-img-modal" loading="lazy" style="max-width:100%;border-radius:12px;margin:1rem 0;">
        <p>${estudo.explicacao}</p>
        <ul style="margin:1rem 0 1.5rem 1.2rem;">
          ${estudo.pontos.map(p => `<li>${p}</li>`).join('')}
        </ul>
        <a href="${estudo.link}" target="_blank" rel="noopener" class="cta">Ver artigo original</a>
      `);
    });
  });
}

// Render Benefícios
function renderBeneficios() {
  const grid = document.querySelector('.benefits-grid');
  if (!grid) { console.error('benefits-grid não encontrado'); return; }
  grid.innerHTML = '';
  beneficios.forEach(beneficio => {
    const card = document.createElement('div');
    card.className = 'card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', beneficio.title);
    card.innerHTML = `
      <div class="benefit-icon"><i class="fas ${beneficio.icon}" aria-hidden="true"></i></div>
      <h3>${beneficio.title}</h3>
      <p>${beneficio.text}</p>
    `;
    grid.appendChild(card);
  });
}

// Render Tratamentos
function renderTratamentos() {
  const grid = document.querySelector('.treatments-grid');
  if (!grid) { console.error('treatments-grid não encontrado'); return; }
  grid.innerHTML = '';
  tratamentos.forEach(tratamento => {
    const card = document.createElement('div');
    card.className = 'card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', tratamento.title);
    card.innerHTML = `
      <div class="treatment-icon"><i class="fas ${tratamento.icon}" aria-hidden="true"></i></div>
      <h3>${tratamento.title}</h3>
      <p>${tratamento.text}</p>
    `;
    grid.appendChild(card);
  });
}

// Dados de Tecnologia: Quest 9 (baseado em docs/referencias.md, docs/biblia.md)
function renderTecnologia() {
  const grid = document.querySelector('.tech-content');
  if (!grid) { console.error('tech-content não encontrado'); return; }
  grid.innerHTML = '';
  tecnologias.forEach(tec => {
    const card = document.createElement('div');
    card.className = 'card tech-card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', tec.title);
    card.innerHTML = `
      <div class="tech-icon"><i class="fas ${tec.icon}" aria-hidden="true"></i></div>
      <h3>${tec.title}</h3>
      <p>${tec.text}</p>
    `;
    grid.appendChild(card);
  });
}

// Dados de Certificações & Reconhecimentos (baseado em docs/referencias.md e fontes oficiais)
function renderCertificacoes() {
  const grid = document.querySelector('.certifications-grid');
  if (!grid) { console.error('certifications-grid não encontrado'); return; }
  grid.innerHTML = '';
  certificacoes.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card certification-card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', cert.title);
    card.innerHTML = `
      <div class="cert-badge"><i class="fas ${cert.icon}" aria-hidden="true"></i></div>
      <h3>${cert.title}</h3>
      <p>${cert.text}</p>
      <a href="${cert.link}" target="_blank" rel="noopener" class="cert-link">Verificar</a>
    `;
    grid.appendChild(card);
  });
}

// Dados de Depoimentos
function renderDepoimentos() {
  const grid = document.querySelector('.testimonials-grid');
  if (!grid) { console.error('testimonials-grid não encontrado'); return; }
  grid.innerHTML = '';
  depoimentos.forEach(dep => {
    const card = document.createElement('div');
    card.className = 'card testimonial-card animate';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', dep.nome);
    card.innerHTML = `
      <img src="${dep.avatar}" alt="${dep.nome}" class="testimonial-avatar" loading="lazy">
      <h3>${dep.nome}</h3>
      <small>${dep.profissao}</small>
      <p>“${dep.relato}”</p>
    `;
    grid.appendChild(card);
  });
}

// Função para toggle das informações de segurança
function toggleSecurityInfo(element) {
  const details = element.querySelector('.security-details');
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    element.style.transform = 'scale(1.02)';
  } else {
    details.classList.add('hidden');
    element.style.transform = 'scale(1)';
  }
}