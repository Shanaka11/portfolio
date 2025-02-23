const ListItem = () => {
	return (
		<li className='relative ml-10 py-4'>
			<a className='absolute top-5 -left-17'>
				<div className='rounded-full bg-black h-13 w-13'></div>
			</a>
			<div className=' flex flex-1 flex-col justify-start gap-1'>
				<p className='text-muted-foreground text-xs'>Mar 2023 - Present</p>
				<h2 className='font-semibold leading-none'>Freelancer</h2>
				<p className='text-muted-foreground  text-sm'>Full Stack Developer</p>
				<ul className='ml-4 list-outside list-disc'>
					<li className='pr-8 text-sm'>
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
					</li>
				</ul>
			</div>
		</li>
	);
};

export default ListItem;
