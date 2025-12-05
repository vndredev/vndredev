import { motion } from 'motion/react';
import { useProjects } from '@/hooks/useProjects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects, loading, error } = useProjects(true);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="p-8 rounded-3xl glass-card animate-pulse"
          >
            <div className="h-8 bg-[var(--text-secondary)]/20 rounded-lg w-3/4 mb-4" />
            <div className="h-4 bg-[var(--text-secondary)]/20 rounded w-full mb-2" />
            <div className="h-4 bg-[var(--text-secondary)]/20 rounded w-5/6 mb-6" />
            <div className="flex gap-3">
              <div className="h-8 bg-[var(--text-secondary)]/20 rounded-full w-20" />
              <div className="h-8 bg-[var(--text-secondary)]/20 rounded-full w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-[var(--text-secondary)]">
        Failed to load projects.
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center text-[var(--text-secondary)]">
        No projects available.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.6,
            delay: 0.1 * (index + 1),
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
