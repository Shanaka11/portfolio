import { Github, Globe } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import { Project } from '@/data/dataTypes';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className='col-span-2 sm:col-span-1'>
			<CardTitle className='grid place-items-center'>
				<img src={project.image} className='h-[170px]' />
			</CardTitle>
			<CardContent className='flex flex-col'>
				<div className='pb-6'>
					<h3 className='font-semibold text-lg'>{project.title}</h3>
					<p className='text-muted-foreground text-xs'>{project.description}</p>
				</div>
			</CardContent>
			<CardFooter className='mt-auto'>
				<div className='flex flex-col gap-3'>
					<div className='flex gap-1 flex-wrap'>
						{project.techStack.map((tech) => (
							<Badge
								className='font-extrabold 
                                py-0 rounded-sm'
								variant='secondary'
								key={tech}
							>
								{tech}
							</Badge>
						))}
					</div>
					<div className='flex gap-2'>
						<a href={project.source} target='_blank' rel='noreferrer noopener'>
							<Button size='sm' className='text-xs'>
								<Github /> Source
							</Button>
						</a>
						{project.demo && (
							<a href={project.demo} target='_blank' rel='noreferrer noopener'>
								<Button size='sm' className='text-xs'>
									<Globe /> Website
								</Button>
							</a>
						)}
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
