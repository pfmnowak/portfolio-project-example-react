export const formatDateMonthYear = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
};

export const formatDateFull = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString('en-us', { month: 'short', day: '2-digit', year: 'numeric' });
};
