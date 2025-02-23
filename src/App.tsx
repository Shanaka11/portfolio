import { MoonIcon } from 'lucide-react';
import './App.css';
import Welcome from './components/custom/Welcome';
import { Button } from './components/ui/button';
import Eduperience from './components/custom/Eduperience';

function App() {
	return (
		<>
			<div className='sticky top-0 z-50 bg-background/75 pt-6 backdrop-blur-sm'>
				<nav className='w-full md:w-2xl container h-10 mx-auto flex justify-between items-center'>
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
			<main className='w-full md:w-2xl mx-auto px-2 md:px-0 flex flex-col gap-16'>
				<Welcome />
				<Eduperience />
			</main>
		</>
	);
}

export default App;
