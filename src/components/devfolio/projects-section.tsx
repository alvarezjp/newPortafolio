import { projects } from '@/lib/data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Estos son algunos de los proyectos en los que he trabajado recientemente.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
