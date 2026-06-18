export type Lang = 'es' | 'en' | 'ca';

export const translations: Record<Lang, {
  metaTitle: string;
  hello: string;
  introText: string;
  reposTitle: string;
  videosTitle: string;
  visitRepo: string;
  watchVideo: string;
  timelineTitle: string;
  batxTitle: string;
  batxDesc: string;
  upcTitle: string;
  upcDesc: string;
  futureText: string;
  socialsTitle: string;
  discordTooltip: string;
  linkedinFuture: string;
  emailTooltip: string;
  hintText: string;
  navHome: string;
  navRepos: string;
  navVideos: string;
  seeMore: string;
  reposPageTitle: string;
  reposPageDesc: string;
  videosPageTitle: string;
  videosPageDesc: string;
  backToHome: string;
  emailSubject: string;
}> = {
  es: {
    metaTitle: "adriabama06 | Portafolio",
    hello: "¡Hola! Soy",
    introText: "Desarrollador de software, estudiante de ingeniería informática y creador de contenido. Me apasiona construir herramientas de código abierto útiles y eficientes, optimizar flujos multimedia e IA, y compartir tutoriales técnicos en mi canal de YouTube para ayudar a otros desarrolladores y entusiastas.",
    reposTitle: "Repositorios destacados",
    videosTitle: "Vídeos destacados",
    visitRepo: "Ver repositorio en GitHub",
    watchVideo: "Ver vídeo en YouTube",
    timelineTitle: "Mi Trayectoria",
    batxTitle: "Estudios de Bachillerato",
    batxDesc: "Cursé la modalidad tecnológica y científica, construyendo sólidas bases en matemáticas, física y dando mis primeros pasos independientes en la programación y automatización.",
    upcTitle: "Grado en Ingeniería Informática (FIB - UPC)",
    upcDesc: "Actualmente cursando mis estudios en la Facultat d'Informàtica de Barcelona (FIB) de la Universitat Politècnica de Catalunya. Enfocado en la arquitectura de software de bajo nivel, algoritmos y sistemas operativos.",
    futureText: "...Y mucho más en el futuro",
    socialsTitle: "Conecta Conmigo",
    discordTooltip: "adriabama06 (Click para copiar)",
    linkedinFuture: "LinkedIn (Próximamente)",
    emailTooltip: "Enviarme un correo",
    hintText: "Click para ir al enlace • Ctrl+Click para pestaña nueva",
    navHome: "Inicio",
    navRepos: "Repositorios",
    navVideos: "YouTube",
    seeMore: "Ver más...",
    reposPageTitle: "Mis Repositorios",
    reposPageDesc: "Una selección de herramientas, utilidades de línea de comandos y proyectos de código abierto.",
    videosPageTitle: "Vídeos en YouTube",
    videosPageDesc: "Tutoriales técnicos especializados sobre optimización multimedia, códecs, inteligencia artificial y gráficos 3D.",
    backToHome: "← Volver al inicio",
    emailSubject: "Contacto desde tu portafolio",
  },
  en: {
    metaTitle: "adriabama06 | Portfolio",
    hello: "Hi! I'm",
    introText: "Software developer, computer engineering student, and content creator. I am passionate about building useful and efficient open-source tools, optimizing multimedia workflows and AI pipelines, and sharing technical tutorials on YouTube to empower other developers and tech enthusiasts.",
    reposTitle: "Featured repositories",
    videosTitle: "Featured videos",
    visitRepo: "View repository on GitHub",
    watchVideo: "Watch video on YouTube",
    timelineTitle: "My Journey",
    batxTitle: "High School (Tech & Science)",
    batxDesc: "Completed the scientific and technical track, building strong foundations in mathematics, physics, and taking my first self-taught steps in programming and automation.",
    upcTitle: "B.S. in Computer Engineering (FIB - UPC)",
    upcDesc: "Currently pursuing my degree at the Facultat d'Informàtica de Barcelona (FIB) of the Universitat Politècnica de Catalunya. Focused on low-level software design, algorithms, and operating systems.",
    futureText: "...And much more in the future",
    socialsTitle: "Connect With Me",
    discordTooltip: "adriabama06 (Click to copy)",
    linkedinFuture: "LinkedIn (Coming soon)",
    emailTooltip: "Send me an email",
    hintText: "Click to open • Ctrl+Click to open in a new tab",
    navHome: "Home",
    navRepos: "Repositories",
    navVideos: "YouTube",
    seeMore: "See more...",
    reposPageTitle: "My Repositories",
    reposPageDesc: "A curated collection of developer tools, command-line utilities, and open-source software.",
    videosPageTitle: "YouTube Videos",
    videosPageDesc: "Specialized tech tutorials covering media compression, codecs, AI reconstructions, and graphics.",
    backToHome: "← Back to home",
    emailSubject: "Contact from portfolio",
  },
  ca: {
    metaTitle: "adriabama06 | Portafoli",
    hello: "Hola! Sóc",
    introText: "Desenvolupador de programari, estudiant d'enginyeria informàtica i creador de contingut. Em fascina construir eines útils i eficients de codi obert, optimitzar fluxos de treball multimèdia i IA, i compartir tutorials tecnològics al meu canal de YouTube per ajudar a altres desenvolupadors i entusiastes.",
    reposTitle: "Repositoris destacats",
    videosTitle: "Vídeos destacats",
    visitRepo: "Veure repositori a GitHub",
    watchVideo: "Veure vídeo a YouTube",
    timelineTitle: "La meva Trajectòria",
    batxTitle: "Estudis de Batxillerat",
    batxDesc: "Vaig cursar la modalitat tecnològica i científica, construint sòlides bases en matemàtiques, física i fent els meus primers passos autodidactes en la programació i automatització.",
    upcTitle: "Grau en Enginyeria Informàtica (FIB - UPC)",
    upcDesc: "Actualment cursant els meus estudis a la Facultat d'Informàtica de Barcelona (FIB) de la Universitat Politècnica de Catalunya. Enfocat en l'arquitectura de programari de baix nivell, algoritmes i sistemes operatius.",
    futureText: "...I molt més en el futur",
    socialsTitle: "Connecta Amb Mi",
    discordTooltip: "adriabama06 (Fes clic per copiar)",
    linkedinFuture: "LinkedIn (Properament)",
    emailTooltip: "Enviar-me un correu",
    hintText: "Fes clic per anar a l'enllaç • Ctrl+Clic per a nova pestanya",
    navHome: "Inici",
    navRepos: "Repositoris",
    navVideos: "YouTube",
    seeMore: "Veure més...",
    reposPageTitle: "Els Meus Repositoris",
    reposPageDesc: "Una col·lecció d'eines de desenvolupador, utilitats de línia de comandes i programari de codi obert.",
    videosPageTitle: "Vídeos a YouTube",
    videosPageDesc: "Tutorials tècnics especialitzats sobre compressió multimèdia, còdecs, reconstrucció en 3D i IA.",
    backToHome: "← Tornar a l'inici",
    emailSubject: "Contacte des del teu portafoli",
  }
};
