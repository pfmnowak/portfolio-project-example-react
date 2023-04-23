export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
};
