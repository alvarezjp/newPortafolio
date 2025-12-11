import type { LucideIcon } from 'lucide-react';
import { CodeXml, Server, Database, Cloud, Type, Wind, Palette } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type Technology = {
  name: string;
  icon: LucideIcon;
};

export const technologies: Technology[] = [
  { name: 'React', icon: CodeXml },
  { name: 'Next.js', icon: CodeXml },
  { name: 'TypeScript', icon: Type },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Vercel', icon: Cloud },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
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
    imageHint: project1Image?.imageHint || 'laptop code',
    tags: ['Next.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Aurea Consulting',
    description: 'Landing page profesional para Aurea Consulting, enfocada en comunicar los servicios de consultoría y generar confianza en los visitantes, con diseño limpio y navegación intuitiva.',
    image: project2Image?.imageUrl || '',
    imageHint: project2Image?.imageHint || 'dashboard charts',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Landing Page Marketing',
    description: 'Landing page para promocionar un curso de marketing, enfocada en comunicar los beneficios y el temario del curso, con un diseño limpio, navegación intuitiva y formularios de inscripción visibles.',
    image: project3Image?.imageUrl || '',
    imageHint: project3Image?.imageHint || 'mobile app',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];
