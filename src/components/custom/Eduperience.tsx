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
							<ListItem />
							<ListItem />
							<ListItem />
							<ListItem />
						</ul>
					</div>
				</Card>
			</TabsContent>
			<TabsContent value='Education'>Change your password here.</TabsContent>
		</Tabs>
	);
};

export default Eduperience;
