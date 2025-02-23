import projectdata from '@/data/project.json';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			<div className='flex justify-between col-span-2 items-center'>
				<h2 className='text-3xl font-bold'>Recent Projects</h2>
				<a className='flex gap-2 text-muted-foreground hover:text-foreground cursor-pointer'>
					View More <ArrowRight />
				</a>
			</div>
			<ProjectCard project={projectdata.projects[0]} />
			<ProjectCard project={projectdata.projects[1]} />
		</div>
	);
};

export default RecentProjects;
