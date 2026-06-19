export type Lang = 'es' | 'en' | 'ca';

export interface TimelineLink {
  label: string;
  url: string;
}

export interface TimelineItem {
  title: string;
  content: string;
  color: string;
  links?: TimelineLink[];
}

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
        title: "Primaria",
        content: "Mi interés por los ordenadores comenzó antes de la ESO, sentando las bases de lo que luego serían mis primeros proyectos de programación.",
        color: "#22c55e"
      },
      {
        title: "1º ESO",
        content: "Creé mi propia red de Minecraft, aprendiendo sobre el funcionamiento de internet, DNS, versiones de Java, creación de plugins y networking para la interconexión de servidores y el control del proxy (BungeeCord) con MySQL (MariaDB).",
        color: "#a855f7"
      },
      {
        title: "2º ESO",
        content: "Empecé a hacer bots de Discord y a practicar JavaScript de forma seria, sentando las bases de mi experiencia en programación web y automatización.",
        color: "#c084fc"
      },
      {
        title: "3º ESO",
        content: "Desarrollé un bot de música en el que, sin querer y por mi cuenta sin conocimientos previos, llegué a crear una clase abstracta para controlar la base de datos con Postgres/SQLite mediante una declaración de una clase base en la que luego se implementan los métodos (abstracción de objetos para implementar las funciones).",
        color: "#d946ef"
      },
      {
        title: "4º ESO",
        content: "Aprendí a programar en C/C++, creando un conversor de imágenes a ASCII en C puro, sin librerías externas (únicamente la librería estándard). Además, como mini treball de recerca, usando Arduino + impresora 3D hice una mini estación meteorológica.",
        color: "#e879f9"
      },
      {
        title: "1º Bachillerato",
        content: "Durante el verano de transición de 4º de ESO a Bachillerato fui al curso de verano de algorítmia de la UPC en la Facultat de Matemàtiques i Estadística, donde me animé a apuntarme a la OICAT. Apenas habiendo hecho algoritmos y siendo mi primer año, quedé en la posición 15 de 31 participantes en la final.",
        color: "#f59e0b"
      },
      {
        title: "2º Bachillerato",
        content: "Acabé mi trabajo de investigación sobre la creación de un chatbot para el instituto, el cual hice durante el verano. Hay que tener en cuenta que cuando lo estaba haciendo apenas el año anterior había salido ChatGPT 3.5 y todo estaba muy verde; apenas salió Llama 3 cuando estaba acabando el código.",
        color: "#f97316"
      },
      {
        title: "Verano post-selectividad",
        content: "Tras acabar la selectividad y el curso, dedicé el verano a múltiples proyectos: una librería en C puro (sin STD) para leer/crear/escribir archivos .bmp, un programa para traducir videos/audios de cualquier idioma a casi cualquier otro, ffmpeg-version-manager para manejar versiones de ffmpeg en Windows/Linux, aportes a REAL-Video-Enhancer añadiendo opciones, y la creación de Docker para bastantes programas.",
        color: "#ef4444",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { label: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" },
          { label: "bdayme (próximamente)", url: "#" }
        ]
      },
      {
        title: "2º Universidad",
        content: "Actualmente cursando segundo año del Grado en Ingeniería Informática en la FIB-UPC. Me he centrado en seguir mejorando y manteniendo ffmpeg-version-manager y auto-video-translator, y he creado bdayme (próximamente público). También me he dedicado mucho a la uni para asegurar la fase selectiva.",
        color: "#0ea5e9",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" }
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
        title: "Primary School",
        content: "My interest in computers started before secondary school, laying the groundwork for my first programming projects.",
        color: "#22c55e"
      },
      {
        title: "1st Year Secondary (ESO)",
        content: "I built my own Minecraft network, learning about how the internet works, DNS, Java versions, plugin development, and networking for server interconnection and proxy management (BungeeCord) with MySQL (MariaDB).",
        color: "#a855f7"
      },
      {
        title: "2nd Year Secondary (ESO)",
        content: "I started building Discord bots and began practicing JavaScript seriously, laying the foundations for my experience in web programming and automation.",
        color: "#c084fc"
      },
      {
        title: "3rd Year Secondary (ESO)",
        content: "I developed a music bot in which, unintentionally and on my own with no prior knowledge, I ended up creating an abstract class to control the database with Postgres/SQLite through a base class declaration that later implements the methods (object abstraction to implement functions).",
        color: "#d946ef"
      },
      {
        title: "4th Year Secondary (ESO)",
        content: "I learned to program in C/C++, creating an image-to-ASCII converter in pure C, with no external libraries (only the standard library). Additionally, as a mini research project, I used Arduino + 3D printer to build a mini weather station.",
        color: "#e879f9"
      },
      {
        title: "1st Year High School",
        content: "During the summer transition from 4th year of ESO to High School, I attended UPC's summer algorithms course at the Faculty of Mathematics and Statistics, where I decided to sign up for OICAT. Having barely done algorithms and in my first year, I placed 15th out of 31 participants in the final.",
        color: "#f59e0b"
      },
      {
        title: "2nd Year High School",
        content: "I finished my research project on creating a chatbot for my school, which I worked on during the summer. It's worth noting that when I was building it, ChatGPT 3.5 had only come out the year before and everything was still very new; Llama 3 had barely launched when I was finishing the code.",
        color: "#f97316"
      },
      {
        title: "Summer after final exams",
        content: "After finishing final exams and the school year, I spent the summer on multiple projects: a pure C library (no STD) for reading/creating/writing .bmp files, a program to translate videos/audio from any language to almost any other, ffmpeg-version-manager for managing ffmpeg versions on Windows/Linux, contributions to REAL-Video-Enhancer adding options, and creating Docker setups for numerous programs.",
        color: "#ef4444",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { label: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" },
          { label: "bdayme (coming soon)", url: "#" }
        ]
      },
      {
        title: "2nd Year University",
        content: "Currently pursuing my second year of B.S. in Computer Engineering at FIB-UPC. I've focused on continuing to improve and maintain ffmpeg-version-manager and auto-video-translator, and I've created bdayme (coming soon). I've also dedicated a lot of time to university to secure the selective phase.",
        color: "#0ea5e9",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" }
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
        title: "Primària",
        content: "El meu interès pels ordinadors va començar abans de l'ESO, posant les bases dels meus primers projectes de programació.",
        color: "#22c55e"
      },
      {
        title: "1r ESO",
        content: "Vaig crear la meva pròpia xarxa de Minecraft, aprenent sobre el funcionament d'Internet, DNS, versions de Java, creació de plugins i networking per a la interconnexió de servidors i el control del proxy (BungeeCord) amb MySQL (MariaDB).",
        color: "#a855f7"
      },
      {
        title: "2n ESO",
        content: "Vaig començar a fer bots de Discord i a practicar JavaScript de forma seriosa, posant les bases de la meva experiència en programació web i automatització.",
        color: "#c084fc"
      },
      {
        title: "3r ESO",
        content: "Vaig desenvolupar un bot de música en el qual, sense voler i pel meu compte sense coneixements previs, vaig arribar a crear una classe abstracta per controlar la base de dades amb Postgres/SQLite mitjançant una declaració d'una classe base en la qual després s'implementen els mètodes (abstracció d'objectes per implementar les funcions).",
        color: "#d946ef"
      },
      {
        title: "4t ESO",
        content: "Vaig aprendre a programar en C/C++, creant un conversor d'imatges a ASCII en C pur, sense cap llibreria externa (només la llibreria estàndard). A més, com a mini treball de recerca, amb Arduino + impressora 3D vaig fer una mini estació meteorològica.",
        color: "#e879f9"
      },
      {
        title: "1r Batxillerat",
        content: "Durant l'estiu de transició de 4t de l'ESO al Batxillerat vaig anar al curs d'estiu d'algorítmia de la UPC a la Facultat de Matemàtiques i Estadística, on em vaig animar a apuntar-me a la OICAT. Apenas havent fet algorismes i sent el meu primer any, vaig quedar en la posició 15 de 31 participants a la final.",
        color: "#f59e0b"
      },
      {
        title: "2n Batxillerat",
        content: "Vaig acabar el meu treball d'investigació sobre la creació d'un chatbot per a l'institut, el qual vaig fer durant l'estiu. Cal tenir en compte que quan ho estava fent, ChatGPT 3.5 havia sortit només l'any anterior i tot estava molt verd; Llama 3 havia sortit just quan estava acabant el codi.",
        color: "#f97316"
      },
      {
        title: "Estiu post-selectivitat",
        content: "Després d'acabar la selectivitat i el curs, vaig dedicar l'estiu a múltiples projectes: una llibreria en C pur (sense STD) per llegir/crear/escriure fitxers .bmp, un programa per traduir vídeos/àudios de qualsevol idioma a gairebé qualsevol altre, ffmpeg-version-manager per gestionar versions de ffmpeg a Windows/Linux, aportacions a REAL-Video-Enhancer afegint opcions, i la creació de Docker per a bastants programes.",
        color: "#ef4444",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" },
          { label: "REAL-Video-Enhancer", url: "https://github.com/TNTwise/REAL-Video-Enhancer" },
          { label: "bdayme (pròximament)", url: "#" }
        ]
      },
      {
        title: "2n Universitat",
        content: "Actualment cursant segon any del Grau en Enginyeria Informàtica a la FIB-UPC. M'he centrat en seguir millorant i mantenint ffmpeg-version-manager i auto-video-translator, i he creat bdayme (pròximament públic). També m'he dedicat molt a la uni per assegurar la fase selectiva.",
        color: "#0ea5e9",
        links: [
          { label: "ffmpeg-version-manager", url: "https://github.com/adriabama06/ffmpeg-version-manager" },
          { label: "auto-video-translator", url: "https://github.com/adriabama06/auto-video-translator" }
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
