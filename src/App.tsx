import { MoonIcon } from 'lucide-react';
import './App.css';
import Welcome from './components/custom/Welcome';
import { Button } from './components/ui/button';

function App() {
	return (
		<>
			<div className='sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
				<nav className='w-full md:w-2xl container h-10 mx-auto flex justify-between'>
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
			<main className='w-full md:w-2xl mx-auto px-2 md:px-0 flex flex-col'>
				<Welcome />
			</main>
		</>
	);
}

export default App;
