import { Github, Linkedin } from 'lucide-react';

const Social = () => {
	return (
		<>
			<a
				href='https://www.linkedin.com/in/shanakaabeysinghe'
				className='text-muted-foreground hover:text-foreground cursor-pointer'
				rel='noopener noreferrer'
				target='_blank'
				title='LinkedIn'
			>
				<Linkedin />
			</a>
			<a
				href='https://github.com/Shanaka11'
				className='text-muted-foreground hover:text-foreground cursor-pointer'
				rel='noopener noreferrer'
				target='_blank'
				title='LinkedIn'
			>
				<Github />
			</a>
		</>
	);
};

export default Social;
