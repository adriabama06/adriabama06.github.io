import type { Repo, Video } from './types';

export const repos: Repo[] = [
  {
    title: "ffmpeg-version-manager",
    url: "https://github.com/adriabama06/ffmpeg-version-manager",
    image: "/images/repos/ffmpeg-version-manager.avif",
    tags: ["C++", "CLI/TUI tool", "Multiplatform"],
    descriptions: {
      es: "Instala, cambia y desinstala versiones de FFmpeg en Windows y Linux de forma instantánea. Una herramienta de línea de comandos súper rápida diseñada para gestionar múltiples versiones de FFmpeg rápidamente.",
      en: "Install, switch, and uninstall FFmpeg versions on Windows and Linux instantly. A super-fast command-line tool designed to manage multiple FFmpeg versions quickly.",
      ca: "Instal·la, canvia i desinstal·la versions de FFmpeg a Windows i Linux de forma instantània. Una eina de línia d'ordres superràpida dissenyada per gestionar múltiples versions de FFmpeg ràpidament."
    }
  },
  {
    title: "auto-video-translator",
    url: "https://github.com/adriabama06/auto-video-translator",
    image: "/images/repos/auto-video-translator.avif",
    tags: ["JavaScript", "TTS + STT", "Local / OpenAI-like API", "Docker"],
    descriptions: {
      es: "Traduce y dobla el audio y subtítulos de tus vídeos utilizando inteligencia artificial al estilo de YouTube. Funciona de manera 100% local (para total privacidad) o bien integrado mediante APIs compatibles tipo OpenAI.",
      en: "Translate and dub the audio and subtitles of your videos using artificial intelligence, just like YouTube. It works 100% locally (for complete privacy) or can be integrated using compatible OpenAI-like APIs.",
      ca: "Tradueix i doblega l'àudio i els subtítols dels teus vídeos utilitzant intel·ligència artificial a l'estil de YouTube. Funciona de manera 100% local (per a total privadesa) o bé integrat mitjançant APIs compatibles tipus OpenAI."
    }
  },
  {
    title: "EstacioMeteorologica",
    url: "https://github.com/adriabama06/EstacioMeteorologica",
    image: "/images/repos/EstacioMeteorologica.avif",
    tags: ["Arduino/C++", "4º ESO", "Treball de recerca"],
    descriptions: {
      es: "Estación meteorológica por la práctica del trabajo de investigación de 4º de ESO. Hecho con Arduino e impresora 3D.",
      en: "Weather station for the 4th year of ESO research project. Made with Arduino and 3D printer.",
      ca: "Estació meteorològica per la pràctica del treball de recerca de 4t d'ESO. Fet amb Arduino i impressora 3D."
    }
  },
  {
    title: "image-to-ascii",
    url: "https://github.com/adriabama06/image-to-ascii",
    image: "/images/repos/image-to-ascii.avif",
    tags: ["C", "STD", "BMP", "Image Conversion", "Multi Thread", "Dynamic Memory"],
    descriptions: {
      es: "Programa hecho en C sin librerías externas, usando solo las librerías std, para hacer todo el proceso de leer archivos Bitmap, convertirlos y reproducirlos en la terminal.",
      en: "Program written in C without external libraries, using only the std libraries, to perform the entire process of reading Bitmap files, converting them, and playing them in the terminal.",
      ca: "Programa fet en C sense llibreries externes, usant només les llibreries std, per fer tot el procés de llegir arxius Bitmap, convertir-los i reproduir-los a la terminal."
    }
  },
  {
    title: "image-to-ascii-cpp",
    url: "https://github.com/adriabama06/image-to-ascii-cpp",
    image: "/images/repos/image-to-ascii-cpp.avif",
    tags: ["C++", "STD", "BMP", "Image Conversion", "Multi Thread", "Dynamic Memory"],
    descriptions: {
      es: "Programa reescrito en C++ sin librerías externas, usando solo las librerías std, para hacer todo el proceso de leer archivos Bitmap, convertirlos y reproducirlos en la terminal.",
      en: "Program rewritten in C++ without external libraries, using only the std libraries, to perform the entire process of reading Bitmap files, converting them, and playing them in the terminal.",
      ca: "Programa reescrit en C++ sense llibreries externes, usant només les llibreries std, per fer tot el procés de llegir arxius Bitmap, convertir-los i reproduir-los a la terminal."
    }
  },
  {
    title: "libabmp",
    url: "https://github.com/adriabama06/libabmp",
    image: "/images/repos/libabmp.avif",
    tags: ["C", "STD", "BMP", "Dynamic Memory", "CMake"],
    descriptions: {
      es: "Una biblioteca C sencilla y ligera para leer y escribir archivos BMP, implementada desde cero sin dependencias externas.",
      en: "A simple and lightweight C library for reading and writing BMP files, implemented from scratch without external dependencies.",
      ca: "Una biblioteca C senzilla i lleugera per llegir i escriure fitxers BMP, implementada des de zero sense dependències externes."
    }
  }
];

export const videos: Video[] = [
  {
    title: {
      es: "Cómo comprimir vídeos sin perder calidad con VMAF y AB-AV1",
      en: "How to Compress Videos Without Quality Loss Using VMAF & AB-AV1",
      ca: "Com comprimir vídeos sense perdre qualitat amb VMAF i AB-AV1"
    },
    url: "https://www.youtube.com/watch?v=jY-ypkG8MZ8",
    image: "/images/videos/compress-videos-vmaf.avif",
    tags: ["Tutorial", "FFmpeg", "AB-AV1", "AV1 Encoding"],
    descriptions: {
      es: "Guía completa para instalar y usar AB-AV1 junto con FFmpeg. Aprende paso a paso a exprimir el almacenamiento al máximo garantizando que tus vídeos retengan una fidelidad visual perfecta medida con VMAF.",
      en: "Comprehensive guide to install and use AB-AV1 along with FFmpeg. Learn step-by-step how to maximize storage savings while keeping a perfect visual quality verified by the VMAF metrics.",
      ca: "Guia completa per instal·lar i fer servir AB-AV1 amb FFmpeg. Aprèn pas a pas a esprémer l'emmagatzematge al màxim garantint que els vídeos mantinguin una fidelitat visual perfecta mesurada amb VMAF."
    }
  },
  {
    title: {
      es: "Tutorial de Gaussian Splatting / NeRF con NerfStudio + Brush",
      en: "Complete Gaussian Splatting / NeRF Tutorial using NerfStudio + Brush",
      ca: "Tutorial de Gaussian Splatting / NeRF amb NerfStudio + Brush"
    },
    url: "https://www.youtube.com/watch?v=38jCys1ZvOw",
    image: "/images/videos/gaussian-splatting-nerfstudio.avif",
    tags: ["3D Reconstruction", "AI Graphics", "Cross-GPU", "Docker"],
    descriptions: {
      es: "Domina la reconstrucción tridimensional fotorrealista a partir de capturas de vídeo convencionales. Guía práctica y detallada usando NerfStudio y Brush, con soporte para gráficas NVIDIA, AMD, Intel y procesadores de Mac.",
      en: "Master photorealistic 3D scene reconstruction starting from ordinary video clips. Hands-on detailed tutorial using NerfStudio and Brush, featuring full support for NVIDIA, AMD, Intel, and Apple Silicon Mac hardware.",
      ca: "Domina la reconstrucció tridimensional fotorealista a partir d'imatges o vídeos. Guia pràctica i detallada utilitzant NerfStudio i Brush, amb suport complet per a gràfiques NVIDIA, AMD, Intel i Macs."
    }
  },
  {
    title: {
      es: "Instalar Sunshine para jugar a tu PC desde cualquier sitio casi sin latencia hasta +4k 240fps",
      en: "Install Sunshine to play on your PC from anywhere with almost no latency up to 4k 240fps",
      ca: "Instal·lar Sunshine per jugar al teu PC des de qualsevol lloc gairebé sense latència fins a +4k 240fps"
    },
    url: "https://www.youtube.com/watch?v=KAbso3pS6YQ",
    image: "/images/videos/install-sunshine-4k-240fps.avif",
    tags: ["Tutorial", "Streaming", "Sunshine", "Game Streaming", "Remote Play"],
    descriptions: {
      es: "Guía completa para instalar y configurar Sunshine y jugar a tu PC desde cualquier lugar con latencia mínima, soportando resoluciones de hasta 4k a 240fps.",
      en: "Complete guide to install and configure Sunshine and play your PC from anywhere with minimal latency, supporting resolutions up to 4k at 240fps.",
      ca: "Guia completa per instal·lar i configurar Sunshine i jugar al teu PC des de qualsevol lloc amb latència mínima, suportant resolucions de fins a 4k a 240fps."
    }
  },
  {
    title: {
      es: "Juega o usa tu ordenador desde cualquier sitio con Parsec | Tutorial",
      en: "Play or use your computer from anywhere with Parsec | Tutorial",
      ca: "Juga o usa el teu ordinador des de qualsevol lloc amb Parsec | Tutorial"
    },
    url: "https://www.youtube.com/watch?v=54xv3fV5MxI",
    image: "/images/videos/parsec-remote-play-tutorial.avif",
    tags: ["Tutorial", "Streaming", "Parsec", "Remote Play"],
    descriptions: {
      es: "Tutorial paso a paso para instalar y usar Parsec, la herramienta que te permite acceder y jugar a tu ordenador desde cualquier lugar de forma sencilla y fluida.",
      en: "Step-by-step tutorial to install and use Parsec, the tool that lets you access and play your computer from anywhere easily and smoothly.",
      ca: "Tutorial pas a pas per instal·lar i utilitzar Parsec, l'eina que et permet accedir i jugar al teu ordinador des de qualsevol lloc de manera senzilla i fluida."
    }
  },
  {
    title: {
      es: "Como instalar Anime4k en mpv para ver anime a 4k en tiempo real",
      en: "How to install Anime4k in mpv to watch anime at 4k in real time",
      ca: "Com instal·lar Anime4k a mpv per veure anime a 4k en temps real"
    },
    url: "https://www.youtube.com/watch?v=jx3SD2Ww9Ck",
    image: "/images/videos/anime4k-mpv-4k.avif",
    tags: ["Tutorial", "Anime", "Anime4k", "MPV", "Upscaling"],
    descriptions: {
      es: "Aprende a instalar y configurar los shaders Anime4k en el reproductor MPV para ver anime escalado a 4k en tiempo real con calidad mejorada.",
      en: "Learn how to install and configure Anime4k shaders in the MPV player to watch anime upscaled to 4k in real time with improved quality.",
      ca: "Aprèn a instal·lar i configurar els shaders Anime4k al reproductor MPV per veure anime escalat a 4k en temps real amb qualitat millorada."
    }
  },
  {
    title: {
      es: "Como compartir tu GPU con una máquina virtual para jugar +2 personas con solo 1 PC",
      en: "How to share your GPU with a virtual machine for 2+ people to play with just 1 PC",
      ca: "Com compartir la teva GPU amb una màquina virtual perquè +2 persones juguin amb només 1 PC"
    },
    url: "https://www.youtube.com/watch?v=nded1kmajO4",
    image: "/images/videos/gpu-sharing-virtual-machine.avif",
    tags: ["Tutorial", "GPU Passthrough", "Virtual Machine", "Gaming", "VFIO"],
    descriptions: {
      es: "Guía para configurar el paso de GPU a máquinas virtuales y permitir que varias personas jueguen simultáneamente usando un solo ordenador.",
      en: "Guide to set up GPU passthrough to virtual machines and allow multiple people to play simultaneously using a single computer.",
      ca: "Guia per configurar el pas de GPU a màquines virtuals i permetre que diverses persones juguin simultàniament utilitzant un sol ordinador."
    }
  },
  {
    title: {
      es: "El programa más rápido para reescalar e interpolar videos | REAL-Video-Enhancer",
      en: "The fastest program for upscaling and interpolating videos | REAL-Video-Enhancer",
      ca: "El programa més ràpid per reescalar i interpolar vídeos | REAL-Video-Enhancer"
    },
    url: "https://www.youtube.com/watch?v=PKjoLYKmRyM",
    image: "/images/videos/real-video-enhancer.avif",
    tags: ["Tutorial", "Video Enhancement", "Upscaling", "Interpolation", "REAL-Video-Enhancer"],
    descriptions: {
      es: "Presentación y tutorial de REAL-Video-Enhancer, la herramienta más rápida para reescalar e interpolar vídeos con inteligencia artificial.",
      en: "Presentation and tutorial of REAL-Video-Enhancer, the fastest tool for upscaling and interpolating videos with artificial intelligence.",
      ca: "Presentació i tutorial de REAL-Video-Enhancer, l'eina més ràpid per reescalar i interpolar vídeos amb intel·ligència artificial."
    }
  },
  {
    title: {
      es: "Re-escalado de las imágenes con SUPIR (Mejor que cualquier otro modelo) - Altamente detallado",
      en: "Image upscaling with SUPIR (Better than any other model) - Highly detailed",
      ca: "Re-escalat de les imatges amb SUPIR (Millor que qualsevol altre model) - Altament detallat"
    },
    url: "https://www.youtube.com/watch?v=_RU2TOvnV2Y",
    image: "/images/videos/supir-image-upscaling.avif",
    tags: ["Tutorial", "Image Enhancement", "SUPIR", "Upscaling", "AI"],
    descriptions: {
      es: "Tutorial detallado sobre cómo usar SUPIR para re-escalar imágenes con una calidad superior a otros modelos de IA disponibles.",
      en: "Detailed tutorial on how to use SUPIR for image upscaling with quality superior to other available AI models.",
      ca: "Tutorial detallat sobre com utilitzar SUPIR per re-escalar imatges amb una qualitat superior a altres models d'IA disponibles."
    }
  },
  {
    title: {
      es: "Como generar y editar subtítulos con IA para cualquier video en cualquier idioma | SubtitleEdit",
      en: "How to generate and edit subtitles with AI for any video in any language | SubtitleEdit",
      ca: "Com generar i editar subtítols amb IA per a qualsevol vídeo en qualsevol idioma | SubtitleEdit"
    },
    url: "https://www.youtube.com/watch?v=5F1hB3BXSjE",
    image: "/images/videos/ai-subtitles-subtitleedit.avif",
    tags: ["Tutorial", "Subtitles", "AI", "SubtitleEdit", "Translation"],
    descriptions: {
      es: "Guía completa para generar y editar subtítulos automáticamente usando inteligencia artificial con SubtitleEdit, compatible con cualquier idioma.",
      en: "Complete guide to automatically generate and edit subtitles using artificial intelligence with SubtitleEdit, compatible with any language.",
      ca: "Guia completa per generar i editar subtítols automàticament utilitzant intel·ligència artificial amb SubtitleEdit, compatible amb qualsevol idioma."
    }
  },
  {
    title: {
      es: "SeedVR2 | Un modelo increíble para reescalar imágenes y en especial videos | Ahora con solo 8GB VRAM",
      en: "SeedVR2 | An incredible model for upscaling images and especially videos | Now with just 8GB VRAM",
      ca: "SeedVR2 | Un model increïble per reescalar imatges i especialment vídeos | Ara amb només 8GB VRAM"
    },
    url: "https://www.youtube.com/watch?v=unbqoBADLJ4",
    image: "/images/videos/seedvr2-upscaling-8gb.avif",
    tags: ["Tutorial", "Video Enhancement", "SeedVR2", "Upscaling", "AI"],
    descriptions: {
      es: "Presentación de SeedVR2, un modelo de IA excepcional para reescalar imágenes y vídeos con solo 8GB de VRAM, ofreciendo resultados impresionantes.",
      en: "Presentation of SeedVR2, an exceptional AI model for upscaling images and videos with just 8GB of VRAM, delivering impressive results.",
      ca: "Presentació de SeedVR2, un model d'IA excepcional per reescalar imatges i vídeos amb només 8GB de VRAM, oferint resultats impressionants."
    }
  },
  {
    title: {
      es: "Como instalar NERF en Windows + Tutorial + Ejemplos + Recomendaciones",
      en: "How to install NERF on Windows + Tutorial + Examples + Recommendations",
      ca: "Com instal·lar NERF a Windows + Tutorial + Exemples + Recomanacions"
    },
    url: "https://www.youtube.com/watch?v=Ls6d3bygHNM",
    image: "/images/videos/install-nerf-windows.avif",
    tags: ["Tutorial", "3D Reconstruction", "NeRF", "Windows", "AI"],
    descriptions: {
      es: "Tutorial completo para instalar NeRF en Windows con ejemplos prácticos y recomendaciones para obtener los mejores resultados en reconstrucción 3D.",
      en: "Complete tutorial to install NeRF on Windows with practical examples and recommendations to get the best results in 3D reconstruction.",
      ca: "Tutorial complet per instal·lar NeRF a Windows amb exemples pràctics i recomanacions per obtenir els millors resultats en reconstrucció 3D."
    }
  }
];
