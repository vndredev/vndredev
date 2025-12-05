import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ai-system',
    title: 'AI-System',
    description: 'AI-powered development workflow system for enhanced productivity and code generation.',
    technologies: ['TypeScript', 'Claude Code', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/vndredev/ai-system',
    featured: true,
  },
  {
    id: 'foodblockz',
    title: 'FoodBlockz',
    description: 'Full-stack food management application with real-time tracking and inventory management.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/vndredev/foodblockz',
    featured: true,
  },
];
