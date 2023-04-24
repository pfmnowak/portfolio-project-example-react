/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOTS, usePagination } from '../../../hooks/usePagination';
import classes from './Pagination.module.scss';

type PaginationProps = {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
};

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}: PaginationProps) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage < 0 || paginationRange!.length < 2) {
		return null;
	}

	return (
		<ul className={classes.pagination}>
			{paginationRange!.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li
							key={`${index}_${pageNumber}`}
							className={`${classes['pagination__item']} ${classes.dots}`}
						>
							&#8230;
						</li>
					);
				}
				return (
					<li
						key={`${index}_${pageNumber}`}
						className={`${classes['pagination__item']} ${
							pageNumber === currentPage ? classes.selected : ''
						}`}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
		</ul>
	);
};

export default Pagination;
