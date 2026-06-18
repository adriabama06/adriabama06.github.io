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
    tags: ["Go / Rust / Bash", "CLI tool", "Multiplatform"],
    descriptions: {
      es: "Instala, cambia y desinstala versiones de FFmpeg en Windows y Linux de forma instantánea. Una herramienta de línea de comandos súper rápida diseñada para gestionar múltiples binarios y optimizar flujos multimedia en desarrollo.",
      en: "Install, switch, and uninstall FFmpeg versions in Windows and Linux instantly. A blazing-fast command-line utility built to handle multiple binaries and optimize multimedia development workflows.",
      ca: "Instal·la, canvia i desinstal·la versions de FFmpeg a Windows i Linux instantàniament. Una eina de línia de comandes súper ràpida dissenyada per gestionar múltiples binaris i optimitzar fluxos de treball multimèdia."
    }
  },
  {
    title: "auto-video-translator",
    url: "https://github.com/adriabama06/auto-video-translator",
    image: "https://i.ytimg.com/vi/nKUtm3Z_aVg/maxresdefault.jpg",
    tags: ["Python", "AI / Whisper", "Local / OpenAI"],
    descriptions: {
      es: "Traduce y dobla el audio y subtítulos de tus vídeos utilizando inteligencia artificial al estilo de YouTube. Funciona de manera 100% local (para total privacidad) o bien integrado mediante la API oficial de OpenAI.",
      en: "Translate and dub video audio and subtitles using AI in YouTube's style. Operates 100% locally for complete privacy, or fully integrated with OpenAI's official translation and speech synthesis APIs.",
      ca: "Tradueix i dobla l'àudio i els subtítols dels teus vídeos fent servir intel·ligència artificial a l'estil de YouTube. Funciona de manera 100% local (per a privacitat total) o ben integrat amb l'API d'OpenAI."
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
    image: "https://i.ytimg.com/vi/jY-ypkG8MZ8/maxresdefault.jpg",
    tags: ["Tutorial", "FFmpeg 6.0+", "AV1 Encoding"],
    descriptions: {
      es: "Guía completa para instalar, compilar y configurar AB-AV1 junto con FFmpeg. Aprende paso a paso a exprimir el almacenamiento al máximo garantizando que tus vídeos retengan una fidelidad visual perfecta medida con VMAF.",
      en: "Comprehensive guide to install, compile, and configure AB-AV1 along with FFmpeg. Learn step-by-step how to maximize storage savings while keeping a perfect visual quality verified by the VMAF metrics.",
      ca: "Guia completa per instal·lar, compilar i configurar AB-AV1 amb FFmpeg. Aprèn pas a pas a esprémer l'emmagatzematge al màxim garantint que els vídeos mantinguin una fidelitat visual perfecta mesurada amb VMAF."
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
    tags: ["3D Reconstruction", "AI Graphics", "Cross-GPU"],
    descriptions: {
      es: "Domina la reconstrucción tridimensional fotorrealista a partir de capturas de vídeo convencionales. Guía práctica y detallada usando NerfStudio y Brush, con soporte para gráficas NVIDIA, AMD, Intel y procesadores de Mac.",
      en: "Master photorealistic 3D scene reconstruction starting from ordinary video clips. Hands-on detailed tutorial using NerfStudio and Brush, featuring full support for NVIDIA, AMD, Intel, and Apple Silicon Mac hardware.",
      ca: "Domina la reconstrucció tridimensional fotorealista a partir d'imatges o vídeos. Guia pràctica i detallada utilitzant NerfStudio i Brush, amb suport complet per a gràfiques NVIDIA, AMD, Intel i Macs."
    }
  }
];
