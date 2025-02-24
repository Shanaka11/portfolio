import ProjectCard from '@/components/custom/ProjectCard';
import projectdata from '@/data/project.json';

const ProjectsPage = () => {
	return (
		<main className='w-full md:w-2xl mx-auto px-8 md:px-0 grid grid-cols-2 gap-4 pb-16 pt-8'>
			<h2 className='text-3xl font-bold col-span-2 mb-4'>Projects</h2>
			{projectdata.projects.map((project) => (
				<ProjectCard project={project} key={project.title} />
			))}
		</main>
	);
};

export default ProjectsPage;
