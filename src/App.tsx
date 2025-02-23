import { MoonIcon } from 'lucide-react';
import './App.css';
import Welcome from './components/custom/Welcome';
import { Button } from './components/ui/button';
import Eduperience from './components/custom/Eduperience';
import RecentProjects from './components/custom/RecentProjects';
import Social from './components/custom/Social';

function App() {
	return (
		<>
			<div className='sticky top-0 z-50 bg-background/75 pt-6 backdrop-blur-sm'>
				<nav className='w-full px-8 md:w-2xl h-10 mx-auto flex justify-between items-center md:px-0'>
					<ul className='flex gap-4'>
						<li>Home</li>
						<li>Projects</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
					<div>
						{/* Theame selector */}
						<Button variant='ghost' size='icon'>
							<MoonIcon />
						</Button>
					</div>
				</nav>
			</div>
			<main className='w-full md:w-2xl mx-auto px-8 md:px-0 flex flex-col gap-16 pb-16'>
				<Welcome />
				<Eduperience />
				<RecentProjects />
			</main>
			<footer className='flex flex-col pb-16 items-center justify-center sm:flex-row-reverse sm:justify-between w-full md:w-2xl mx-auto px-8 md:px-0'>
				<div className='flex gap-4 mb-8 sm:mb-0'>
					<Social />
				</div>
				<section>
					<p className='text-center text-xs text-muted-foreground '>
						<span>&copy; {new Date().getFullYear()}</span>{' '}
						<a className='link' href='/'>
							shanakaabeysinghe.com
						</a>
					</p>
				</section>
			</footer>
		</>
	);
}

export default App;
