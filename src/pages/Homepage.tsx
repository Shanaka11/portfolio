import Welcome from '@/components/custom/Welcome';
import Eduperience from '@/components/custom/Eduperience';
import RecentProjects from '@/components/custom/RecentProjects';

const Homepage = () => {
	return (
		<main className='w-full md:w-2xl mx-auto px-8 md:px-0 flex flex-col gap-16 pb-16'>
			<Welcome />
			<Eduperience />
			<RecentProjects />
		</main>
	);
};

export default Homepage;
