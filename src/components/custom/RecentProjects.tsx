import ProjectCard from './ProjectCard';

const RecentProjects = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			<h2 className='text-3xl font-bold col-span-2'>Recent Projects</h2>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
};

export default RecentProjects;
