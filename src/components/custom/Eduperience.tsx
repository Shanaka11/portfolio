import careerData from '@/data/career.json';
import educationData from '@/data/education.json';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ListItem from './ListItem';

const Eduperience = () => {
	return (
		<Tabs defaultValue='Experience' className='w-full'>
			<TabsList className='w-full'>
				<TabsTrigger value='Experience' className='w-full cursor-pointer'>
					Experience
				</TabsTrigger>
				<TabsTrigger value='Education' className='w-full cursor-pointer'>
					Education
				</TabsTrigger>
			</TabsList>
			<TabsContent value='Experience'>
				<Card>
					<div>
						<ul className='ml-10 border-l'>
							{careerData.career.map((episode) => (
								<ListItem episode={episode} key={episode.company} />
							))}
						</ul>
					</div>
				</Card>
			</TabsContent>
			<TabsContent value='Education'>
				<Card>
					<div>
						<ul className='ml-10 border-l'>
							{educationData.education.map((episode) => (
								<ListItem episode={episode} key={episode.company} />
							))}
						</ul>
					</div>
				</Card>
			</TabsContent>
		</Tabs>
	);
};

export default Eduperience;
