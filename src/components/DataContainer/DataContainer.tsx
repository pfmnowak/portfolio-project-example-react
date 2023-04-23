import { ReactNode } from 'react';
import { PulseLoader } from 'react-spinners';
import { colorPrimary } from '../../constants';
import useFetchData from '../../hooks/useFetchData';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

type DataContainerProps = {
	url: string;
	renderData: (data: any[] | undefined) => void;
	children?: ReactNode;
};

const DataContainer = ({ url, renderData }: DataContainerProps) => {
	const { data, loading, hasError } = useFetchData(url);

	return (
		<>
			{loading && (
				<PulseLoader loading={loading} color={colorPrimary} aria-label='Loading Spinner' />
			)}
			{hasError && <ErrorMessage>Could not fetch the data. Please try again</ErrorMessage>}
			{!hasError && !loading && renderData(data)}
		</>
	);
};

export default DataContainer;
