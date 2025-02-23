import { Episodes } from '@/data/dataTypes';

type ListItemProps = {
	episode: Episodes;
};
const ListItem = ({ episode }: ListItemProps) => {
	return (
		<li className='relative ml-10 py-4'>
			<a
				className='absolute top-5 -left-17'
				href={episode.href}
				target='_blank'
				rel='noopenner noreferrer'
			>
				<img
					src={episode.logo}
					alt={episode.position}
					className='rounded-full h-13 w-13 bg-white border'
				></img>
			</a>
			<div className=' flex flex-1 flex-col justify-start gap-1'>
				<p className='text-muted-foreground text-xs'>{episode.time}</p>
				<h2 className='font-semibold leading-none'>{episode.company}</h2>
				<p className='text-muted-foreground  text-sm'>{episode.position}</p>
				<ul className='ml-4 list-outside list-disc'>
					{episode.descriotion?.map((desc) => (
						<li className='pr-8 text-sm' key={desc}>
							{desc}
						</li>
					))}
					{/* <li className='pr-8 text-sm'>
						Developed Front End using React & NextJS
					</li>
					<li className='pr-8 text-sm'>
						Developed Backend services using NodeJS & Typescript
					</li>
					<li className='pr-8 text-sm'>
						Used Postgress and mysql to design and manage databases
					</li>
					<li className='pr-8 text-sm'>
						Used lambda's to create microservices
					</li> */}
				</ul>
			</div>
		</li>
	);
};

export default ListItem;
