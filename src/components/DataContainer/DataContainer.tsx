import { ReactNode } from 'react';
import useFetchData from '../../hooks/useFetchData';

type DataContainerProps = {
	url: string;
	renderData: (data: any[] | undefined) => void;
	children?: ReactNode;
};

const DataContainer = ({ url, renderData }: DataContainerProps) => {
	const { data, loading, hasError } = useFetchData(url);

	return (
		<>
			{
				loading && 'Loading...'
				// <FadeLoader loading={loadingServices} aria-label='Loading Spinner' />
			}
			{
				hasError && 'Could not fetch the data. Please try again'
				// <ErrorMessage>Could not fetch the data. Please try again</ErrorMessage>
			}
			{!hasError && !loading && renderData(data)}
		</>
	);
};

export default DataContainer;
