import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import Logo from '/Logo.svg';
const Welcome = () => {
	return (
		<section className='grid gap-1 grid-cols-[auto_auto]'>
			<div className='flex flex-col justify-around pt-10 pb-2 gap-2'>
				<div>
					<h1 className='text-4xl mb-4 font-[sour_gummy]'>
						Hello there, I am Shanaka
					</h1>
					<p className='text-muted-foreground font-extralight'>
						I am a full-stack developer with three years of hands-on experience
						in React, Next.js, and Node.js, freelancing across diverse projects.
					</p>
				</div>
				<div className='flex gap-4 mt-2 sm:mt-0 items-center'>
					<Button variant='outline' className='cursor-pointer mr-4' size='lg'>
						Resume <Download />
					</Button>
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
				</div>
			</div>
			<img
				width={300}
				src={Logo}
				className='hidden sm:block'
				alt='React logo'
			/>
		</section>
	);
};

export default Welcome;
