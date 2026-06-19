import type { Lang, TimelineItem } from './types';
export type { Lang, LinkItem, TimelineItem } from './types';

export const translations: Record<Lang, {
  metaTitle: string;
  hello: string;
  introText: string;
  reposTitle: string;
  videosTitle: string;
  visitRepo: string;
  watchVideo: string;
  timelineTitle: string;
  timeline: TimelineItem[];
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
    timeline: [
      {
        title: "Educación Primaria",
        content: "Durante esta etapa despertó mi curiosidad por la tecnología y la informática, sentando las bases de mi interés por la computación y motivándome a investigar cómo funcionaban los sistemas digitales por mi cuenta.",
        color: "#db2777"
      },
      {
        title: "1º de ESO — Redes y Servidores de Minecraft",
        content: "Creé mi propia red de Minecraft de forma independiente. Durante este proyecto, aprendí sobre el funcionamiento de internet, DNS, control de versiones de Java, desarrollo de plugins en Java, interconexión de servidores utilizando BungeeCord como proxy y bases de datos relacionales con MySQL y MariaDB.",
        color: "#a855f7"
      },
      {
        title: "2º de ESO — Bots de Discord y JavaScript",
        content: "Comencé a desarrollar bots para Discord para automatizar y añadir funciones a comunidades. Este fue mi primer contacto serio con JavaScript, lo que me impulsó a practicar programación de manera constante y a entender el desarrollo asíncrono.",
        color: "#8b5cf6"
      },
      {
        title: "3º de ESO — Abstracción de Bases de Datos",
        content: "Desarrollé un bot de música avanzado. Sin conocimientos teóricos previos de ingeniería de software, diseñé una clase abstracta base para la gestión de bases de datos. Esto me permitió implementar de forma polimórfica métodos específicos para Postgres y SQLite, logrando una abstracción de objetos completa y un código altamente modular.",
        color: "#6366f1"
      },
      {
        title: "4º de ESO — C/C++ y Estación Meteorológica",
        content: "Aprendí a programar en C y C++. Desarrollé un conversor de imágenes a ASCII en C puro, utilizando únicamente la librería estándar. Además, para el \"mini treball de recerca\" de 4º de ESO, construí una estación meteorológica física utilizando placas Arduino, sensores y una impresora 3D para diseñar y fabricar la carcasa.",
        color: "#3b82f6"
      },
      {
        title: "1º de Bachillerato — Algoritmia y Olimpíadas",
        content: "Durante el verano de transición de 4º de ESO a Bachillerato, asistí al curso de verano de algoritmia de la UPC en la Facultad de Matemáticas y Estadística (FME). Esta experiencia me motivó a apuntarme a la OICAT (Olimpíada Informàtica de Catalunya), donde, con apenas experiencia previa en algoritmos y siendo mi primer año, logré quedar en la posición 15 de 31 finalistas.",
        color: "#0ea5e9"
      },
      {
        title: "2º de Bachillerato — Chatbot para el Instituto",
        content: "Realicé mi Treball de Recerca (TR) sobre la creación de un chatbot inteligente para mi instituto, el cual desarrollé durante el verano. Fue un gran reto técnico, ya que en ese momento solo hacía un año del lanzamiento de ChatGPT 3.5 y el ecosistema de IA generativa estaba muy verde; de hecho, Llama 3 se lanzó justo cuando estaba finalizando el código del proyecto.",
        color: "#14b8a6"
      },
      {
        title: "Verano tras Selectividad — Proyectos y Código Abierto",
        content: "Tras acabar los exámenes de acceso a la universidad, dediqué el verano a crear y contribuir a múltiples proyectos de código abierto: desarrollé una librería en C puro sin STD para leer/escribir archivos .bmp; creé auto-video-translator para traducir/doblar vídeos de cualquier idioma; programé ffmpeg-version-manager para gestionar versiones de FFmpeg en Windows/Linux; colaboré en REAL-Video-Enhancer añadiendo nuevas opciones de escalado; y empaqueté en contenedores Docker herramientas avanzadas como MiniCPM-o, whisper.cpp-server, SCP Secret Laboratory, Practical-RIFE, RIFE-FixDropFrames, docker-canary-serve-v2 (con soporte para Canary V2 de NVIDIA), Qwen3-TTS, SUPIR-extended, MultiPassDedup y whisper-webui-custom-server.",
        color: "#f59e0b",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { text: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" }
        ]
      },
      {
        title: "Grado en Ingeniería Informática (FIB - UPC)",
        content: "Actualmente estoy cursando mi segundo año en la Facultat d'Informàtica de Barcelona (FIB) de la Universitat Politècnica de Catalunya. Durante el primer año me centré intensamente en los estudios para superar con éxito la exigente fase selectiva (los dos primeros cuatrimestres). En el plano personal, he continuado optimizando y manteniendo ffmpeg-version-manager y auto-video-translator, además de desarrollar bdayme, una aplicación privada cuyo código publicaré próximamente.",
        color: "#10b981",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" }
        ]
      }
    ],
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
    timeline: [
      {
        title: "Primary Education",
        content: "During this stage, my curiosity for technology and computing was sparked, laying the foundations for my passion for computer science and motivating me to explore how digital systems worked on my own.",
        color: "#db2777"
      },
      {
        title: "1st Year of ESO — Minecraft Networks & Servers",
        content: "I independently created my own Minecraft network. Through this project, I learned about internet architecture, DNS, Java version management, Java plugin development, server interconnection using BungeeCord as a proxy, and relational databases with MySQL and MariaDB.",
        color: "#a855f7"
      },
      {
        title: "2nd Year of ESO — Discord Bots & JavaScript",
        content: "I started developing Discord bots to automate and add custom features to community servers. This was my first serious contact with JavaScript, which pushed me to practice programming consistently and understand asynchronous software flows.",
        color: "#8b5cf6"
      },
      {
        title: "3rd Year of ESO — Database Abstraction",
        content: "I developed an advanced music bot. Without any prior theoretical knowledge of software engineering, I designed an abstract base class for database management. This allowed me to polymorphically implement specific methods for Postgres and SQLite, achieving object abstraction and highly modular code.",
        color: "#6366f1"
      },
      {
        title: "4th Year of ESO — C/C++ & Weather Station",
        content: "I learned to program in C and C++. I created an image-to-ASCII converter in pure C, using only the standard library. Additionally, for our 4th-year \"mini-research project\", I built a physical weather station using Arduino boards, sensors, and a 3D printer to design and manufacture its housing.",
        color: "#3b82f6"
      },
      {
        title: "1st Year of Bachillerato — Algorithms & Olympiads",
        content: "During the summer transition from 4th of ESO to Bachillerato, I attended the UPC algorithms summer course at the Faculty of Mathematics and Statistics (FME). This inspired me to register for OICAT (Catalan Computer Olympiad), where, with barely any prior experience in competitive programming and being my first year, I ranked 15th out of 31 finalists.",
        color: "#0ea5e9"
      },
      {
        title: "2nd Year of Bachillerato — School Chatbot TR",
        content: "I conducted my research project (Treball de Recerca) on building an intelligent chatbot for my school over the summer. It was a massive technical challenge: ChatGPT 3.5 had been released barely a year prior, the LLM ecosystem was extremely early, and Llama 3 was released just as I was finishing the codebase.",
        color: "#14b8a6"
      },
      {
        title: "Summer after Selectividad — Open Source & Projects",
        content: "After finishing college entrance exams, I spent the summer creating and contributing to multiple open-source projects: developed a pure C library without STD to read/write .bmp files; created auto-video-translator for video translation/dubbing; programmed ffmpeg-version-manager to easily manage FFmpeg builds on Windows/Linux; contributed scaling options to REAL-Video-Enhancer; and containerized advanced tools using Docker, including MiniCPM-o, whisper.cpp-server, SCP Secret Laboratory, Practical-RIFE, RIFE-FixDropFrames, docker-canary-serve-v2 (featuring NVIDIA's Canary V2), Qwen3-TTS, SUPIR-extended, MultiPassDedup, and whisper-webui-custom-server.",
        color: "#f59e0b",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { text: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" }
        ]
      },
      {
        title: "B.S. in Computer Engineering (FIB - UPC)",
        content: "I am currently pursuing my second year at the Facultat d'Informàtica de Barcelona (FIB) of the Universitat Politècnica de Catalunya. During the first year, I focused heavily on academic work to successfully pass the demanding UPC selective phase (first two semesters). Personally, I have continued maintaining and optimizing ffmpeg-version-manager and auto-video-translator, alongside developing bdayme, a private application whose code I will publish soon.",
        color: "#10b981",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" }
        ]
      }
    ],
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
    timeline: [
      {
        title: "Educació Primària",
        content: "Durant aquesta etapa va despertar la meva curiositat per la tecnologia i la informàtica, establint les bases del meu interès per la computació i motivant-me a investigar com funcionaven els sistemes digitals pel meu compte.",
        color: "#db2777"
      },
      {
        title: "1r d'ESO — Xarxes i Servidors de Minecraft",
        content: "Vaig crear la meva pròpia xarxa de Minecraft de forma independent. Durant aquest projecte, vaig aprendre sobre el funcionament d'Internet, DNS, control de versions de Java, desenvolupament de plugins en Java, interconnexió de servidors utilitzant BungeeCord com a proxy i bases de dades relacionals amb MySQL i MariaDB.",
        color: "#a855f7"
      },
      {
        title: "2n d'ESO — Bots de Discord i JavaScript",
        content: "Vaig començar a desenvolupar bots per a Discord per automatitzar i afegir funcions a comunitats. Aquest va ser el meu primer contacte seriós amb JavaScript, la qual cosa em va impulsar a practicar programació de manera constant i a comprendre el desenvolupament asíncron.",
        color: "#8b5cf6"
      },
      {
        title: "3r d'ESO — Abstracció de Bases de Dades",
        content: "Vaig desenvolupar un bot de música avançat. Sense coneixements teòrics previs d'enginyeria de programari, vaig dissenyar una classe abstracta base per a la gestió de bases de dades. Això em va permetre implementar de forma polimòrfica mètodes específics per a Postgres i SQLite, aconseguint una abstracció d'objectes completa i un codi altament modular.",
        color: "#6366f1"
      },
      {
        title: "4t d'ESO — C/C++ i Estació Meteorològica",
        content: "Vaig aprendre a programar en C i C++. Vaig crear un conversor d'imatges a ASCII en C pur, utilitzant només la llibreria estàndard. A més, per al \"mini treball de recerca\" de 4t d'ESO, vaig construir una estació meteorològica física utilitzant plaques Arduino, sensors i una impressora 3D per dissenyar i fabricar la carcassa.",
        color: "#3b82f6"
      },
      {
        title: "1r de Batxillerat — Algorísmia i Olimpíades",
        content: "Durant l'estiu de transició de 4t d'ESO a Batxillerat, vaig assistir al curs d'estiu d'algorísmia de la UPC a la Facultat de Matemàtiques i Estadística (FME). Aquesta experiència em va motivar a inscriure'm a l'OICAT (Olimpíada Informàtica de Catalunya) on, amb molt poc bagatge en algorísmia i sent el meu primer any, vaig aconseguir quedar en la posició 15 de 31 finalistes.",
        color: "#0ea5e9"
      },
      {
        title: "2n de Batxillerat — Chatbot per a l'Institut",
        content: "Vaig dur a terme el meu Treball de Recerca (TR) sobre la creació d'un chatbot intel·ligent per al meu institut, el qual vaig desenvolupar durant l'estiu. Va ser un repte tècnic majúscul: feia tot just un any del llançament de ChatGPT 3.5 i l'ecosistema d'IA generativa estava molt verd; de fet, Llama 3 es va llançar quan estava enllestint el codi del projecte.",
        color: "#14b8a6"
      },
      {
        title: "Estiu després de la Selectivitat — Projectes i Codi Obert",
        content: "Després d'acabar els exàmens de selectivitat, vaig dedicar l'estiu a crear i contribuir a múltiples projectes de codi obert: vaig desenvolupar una llibreria en C pur sense STD per llegir/escriure fitxers .bmp; vaig crear auto-video-translator per traduir i doblar vídeos; vaig programar ffmpeg-version-manager per gestionar fàcilment les versions de FFmpeg a Windows/Linux; vaig col·laborar a REAL-Video-Enhancer afegint-hi noves opcions d'escalat; i vaig encapsular en contenidors Docker diverses eines avançades com MiniCPM-o, whisper.cpp-server, SCP Secret Laboratory, Practical-RIFE, RIFE-FixDropFrames, docker-canary-serve-v2 (amb suport per a Canary V2 de NVIDIA), Qwen3-TTS, SUPIR-extended, MultiPassDedup i whisper-webui-custom-server.",
        color: "#f59e0b",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { text: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" }
        ]
      },
      {
        title: "Grau en Enginyeria Informàtica (FIB - UPC)",
        content: "Actualment estic cursant el meu segon any a la Facultat d'Informàtica de Barcelona (FIB) de la Universitat Politècnica de Catalunya. Durant el primer any em vaig centrar intensament en els estudis acadèmics per superar amb èxit l'exigent fase selectiva (els dos primers quadrimestres). En l'àmbit personal, he continuat optimitzant i mantenint ffmpeg-version-manager i auto-video-translator, a més de desenvolupar bdayme, una aplicació privada el codi de la qual publicaré properament.",
        color: "#10b981",
        links: [
          { text: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { text: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" }
        ]
      }
    ],
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
