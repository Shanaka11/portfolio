export type Episodes = {
	time: string;
	company: string;
	position: string;
	href: string;
	logo: string;
	descriotion?: string[];
};

export type Project = {
	title: string;
	description: string;
	techStack: string[];
	demo?: string;
	source: string;
	image: string;
};
