import './App.css';
import Homepage from '@/pages/Homepage';
import { Button } from './components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import Social from './components/custom/Social';
import { Routes, Route, Link } from 'react-router';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { useTheme } from './components/custom/ThemeProvider';

function App() {
	const { setTheme, theme } = useTheme();

	const handleThemeChange = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<div className='sticky top-0 z-50 bg-background/75 pt-6 backdrop-blur-sm'>
				<nav className='w-full px-8 md:w-2xl h-10 mx-auto flex justify-between items-center md:px-0'>
					<ul className='flex gap-4'>
						<li className='text-muted-foreground hover:text-foreground cursor-pointer'>
							<Link to='/'>Home</Link>
						</li>
						<li className='text-muted-foreground hover:text-foreground cursor-pointer'>
							<Link to='/projects'>Projects</Link>
						</li>
						<li className='text-muted-foreground hover:text-foreground cursor-pointer'>
							<a
								href='https://medium.com/@shanakaabeysinghe'
								target='_blank'
								rel='noreferrer noopener'
							>
								Blog
							</a>
						</li>
						{/* <Link to='/contact'>
							<li className='text-muted-foreground hover:text-foreground cursor-pointer'>
								Contact
							</li>
						</Link> */}
					</ul>
					<div>
						{/* Theame selector */}
						<Button
							variant='ghost'
							size='icon'
							onClick={handleThemeChange}
							className='cursor-pointer'
							role='button'
							aria-label='Toggle theme'
						>
							{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
						</Button>
					</div>
				</nav>
			</div>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
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
