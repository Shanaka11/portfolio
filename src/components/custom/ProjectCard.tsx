import { Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const ProjectCard = () => {
	return (
		<Card className='col-span-2 sm:col-span-1'>
			<CardContent className='flex flex-col'>
				<div className='pb-6'>
					<img src='./project_portfolio.png' />

					<h3 className='font-semibold text-lg'>Portfolio</h3>
					<p className='text-muted-foreground text-xs'>
						A minimalistic portfolio website to showcase my work. built using
						react sjakhd asjkdhaksjhdaslkjdh as asdasds
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='flex gap-1 flex-wrap'>
						<Badge
							className='font-extrabold 
                        py-0 rounded-sm'
							variant='secondary'
						>
							React
						</Badge>
						<Badge
							className='font-extrabold py-0 rounded-sm'
							variant='secondary'
						>
							Tailwind CSS
						</Badge>
						<Badge
							className='font-extrabold 
                        py-0 rounded-sm'
							variant='secondary'
						>
							React Router
						</Badge>
						<Badge
							className='font-extrabold py-0 rounded-sm'
							variant='secondary'
						>
							Vite
						</Badge>
					</div>
					<a>
						<Button size='sm' className='text-xs'>
							<Github /> Source
						</Button>
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
