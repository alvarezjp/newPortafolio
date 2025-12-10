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
const project4Image = PlaceHolderImages.find(p => p.id === 'project-4');

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product management, and a secure checkout process.',
    image: project1Image?.imageUrl || '',
    imageHint: project1Image?.imageHint || 'laptop code',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-2',
    title: 'DataViz Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, with real-time updates and customizable charts.',
    image: project2Image?.imageUrl || '',
    imageHint: project2Image?.imageHint || 'dashboard charts',
    tags: ['React', 'D3.js', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'ConnectApp Social',
    description: 'A mobile-first social media application for connecting with friends and sharing updates in real-time.',
    image: project3Image?.imageUrl || '',
    imageHint: project3Image?.imageHint || 'mobile app',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    githubUrl: '#',
  },
  {
    id: 'project-4',
    title: 'SaaS Landing Page',
    description: 'A responsive and high-converting landing page for a software-as-a-service product, built with performance in mind.',
    image: project4Image?.imageUrl || '',
    imageHint: project4Image?.imageHint || 'website landing',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];
