import type { Lang } from './translations';

export interface Repo {
  title: string;
  url: string;
  image: string;
  tags: string[];
  descriptions: Record<Lang, string>;
}

export interface Video {
  title: Record<Lang, string>;
  url: string;
  image: string;
  tags: string[];
  descriptions: Record<Lang, string>;
}

export const repos: Repo[] = [
  {
    title: "ffmpeg-version-manager",
    url: "https://github.com/adriabama06/ffmpeg-version-manager",
    image: "https://i.ytimg.com/vi/MZpFsnVdyu8/maxresdefault.jpg",
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
    image: "https://i.ytimg.com/vi/nKUtm3Z_aVg/maxresdefault.jpg",
    tags: ["JavaScript", "TTS + STT", "Local / OpenAI-like API", "Docker"],
    descriptions: {
      es: "Traduce y dobla el audio y subtítulos de tus vídeos utilizando inteligencia artificial al estilo de YouTube. Funciona de manera 100% local (para total privacidad) o bien integrado mediante APIs compatibles tipo OpenAI.",
      en: "Translate and dub the audio and subtitles of your videos using artificial intelligence, just like YouTube. It works 100% locally (for complete privacy) or can be integrated using compatible OpenAI-like APIs.",
      ca: "Tradueix i doblega l'àudio i els subtítols dels teus vídeos utilitzant intel·ligència artificial a l'estil de YouTube. Funciona de manera 100% local (per a total privadesa) o bé integrat mitjançant APIs compatibles tipus OpenAI."
    }
  },
  {
    title: "ffmpeg-version-manager",
    url: "https://github.com/adriabama06/ffmpeg-version-manager",
    image: "https://i.ytimg.com/vi/MZpFsnVdyu8/maxresdefault.jpg",
    tags: ["C++", "CLI/TUI tool", "Multiplatform"],
    descriptions: {
      es: "Instala, cambia y desinstala versiones de FFmpeg en Windows y Linux de forma instantánea. Una herramienta de línea de comandos súper rápida diseñada para gestionar múltiples versiones de FFmpeg rápidamente.",
      en: "Install, switch, and uninstall FFmpeg versions on Windows and Linux instantly. A super-fast command-line tool designed to manage multiple FFmpeg versions quickly.",
      ca: "Instal·la, canvia i desinstal·la versions de FFmpeg a Windows i Linux de forma instantània. Una eina de línia d'ordres superràpida dissenyada per gestionar múltiples versions de FFmpeg ràpidament."
    }
  },
];

export const videos: Video[] = [
  {
    title: {
      es: "Cómo comprimir vídeos sin perder calidad con VMAF y AB-AV1",
      en: "How to Compress Videos Without Quality Loss Using VMAF & AB-AV1",
      ca: "Com comprimir vídeos sense perdre qualitat amb VMAF i AB-AV1"
    },
    url: "https://www.youtube.com/watch?v=jY-ypkG8MZ8",
    image: "https://i.ytimg.com/vi/jY-ypkG8MZ8/maxresdefault.jpg",
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
    image: "https://i.ytimg.com/vi/38jCys1ZvOw/maxresdefault.jpg",
    tags: ["3D Reconstruction", "AI Graphics", "Cross-GPU", "Docker"],
    descriptions: {
      es: "Domina la reconstrucción tridimensional fotorrealista a partir de capturas de vídeo convencionales. Guía práctica y detallada usando NerfStudio y Brush, con soporte para gráficas NVIDIA, AMD, Intel y procesadores de Mac.",
      en: "Master photorealistic 3D scene reconstruction starting from ordinary video clips. Hands-on detailed tutorial using NerfStudio and Brush, featuring full support for NVIDIA, AMD, Intel, and Apple Silicon Mac hardware.",
      ca: "Domina la reconstrucció tridimensional fotorealista a partir d'imatges o vídeos. Guia pràctica i detallada utilitzant NerfStudio i Brush, amb suport complet per a gràfiques NVIDIA, AMD, Intel i Macs."
    }
  }
];
