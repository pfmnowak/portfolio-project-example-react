import { useEffect, useState } from 'react';

const useFetchData = (url: string) => {
	const [data, setData] = useState<any[] | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const data = await fetch(url).then(response => response.json());
				setLoading(false);
				setHasError(false);
				if (Array.isArray(data) && data.length) {
					setData(data);
				} else {
					setHasError(true);
				}
			} catch (error) {
				setLoading(false);
				setHasError(true);
			}
		};
		getData();
	}, [url]);

	return { data, loading, hasError };
};

export default useFetchData;
