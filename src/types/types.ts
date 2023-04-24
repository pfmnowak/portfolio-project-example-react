export type Qualification = {
	id: number;
	company: string;
	description: string;
	from: string;
	to: string;
};

export type Service = {
	id: number;
	name: string;
	description: string;
};

export type Comment = {
	id: string;
	name: string;
	email: string;
	content: string;
	createdAt: string;
};
