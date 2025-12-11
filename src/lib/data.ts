import { PlaceHolderImages } from '@/lib/placeholder-images';
import { IconType } from "react-icons";
import { FaAws, FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMysql, SiReactquery, SiRedux, SiStrapi } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export type Technology = {
  name: string;
  icon: IconType;
};

export const technologies: Technology[] = [
  { name: 'React', icon: FaReact  },
  { name: 'Next.js', icon: RiNextjsLine  },
  { name: 'TypeScript', icon: TbBrandTypescript },
  { name: 'Node.js', icon: FaNodeJs  },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill  },
  { name: 'Vercel', icon: RiVercelFill  },
  { name: 'Figma', icon: FaFigma   },
  { name: 'Redux', icon: SiRedux    },
  { name: 'React Query', icon: SiReactquery    },
  { name: 'Git', icon: FaGitAlt    },
  { name: 'GitHub', icon: FaGithub     },
  { name: 'Strapi', icon: SiStrapi      },
  { name: 'AWS', icon: FaAws       },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const project1Image = PlaceHolderImages.find(p => p.id === 'project-1');
const project2Image = PlaceHolderImages.find(p => p.id === 'project-2');
const project3Image = PlaceHolderImages.find(p => p.id === 'project-3');

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Landing Page para agencia de diseño',
    description: 'Sitio web moderno y responsivo para una agencia de diseño web, con una estructura clara, secciones informativas y un diseño visual limpio enfocado en la experiencia del usuario.',
    image: project1Image?.imageUrl || '',
    tags: ['Next.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://new-mapaches.vercel.app/',
    githubUrl: 'https://github.com/alvarezjp/newMapaches',
  },
  {
    id: 'project-2',
    title: 'Aurea Consulting',
    description: 'Landing page profesional para Aurea Consulting, enfocada en comunicar los servicios de consultoría y generar confianza en los visitantes, con diseño limpio y navegación intuitiva.',
    image: project2Image?.imageUrl || '',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://portafolio-aurea-consulting.vercel.app/',
    githubUrl: 'https://github.com/alvarezjp/Portafolio-AureaConsulting',
  },
  {
    id: 'project-3',
    title: 'Landing Page Marketing',
    description: 'Landing page para promocionar un curso de marketing, enfocada en comunicar los beneficios y el temario del curso, con un diseño limpio, navegación intuitiva y formularios de inscripción visibles.',
    image: project3Image?.imageUrl || '',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://portafolio-landing-marketing.vercel.app/',
    githubUrl: 'https://github.com/alvarezjp/Portafolio-LandingMarketing',
  },
];
