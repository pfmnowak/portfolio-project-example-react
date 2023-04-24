import { useMemo, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constants';
import { Comment as CommentType } from '../../types/types';
import Comment from '../Comment/Comment';
import Pagination from '../ui/Pagination/Pagination';
import classes from './Comments.module.scss';

type CommentsProps = {
	items: CommentType[];
};

const Comments = ({ items }: CommentsProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
		return items.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, items]);

	return (
		<>
			<ul className={classes.comments}>
				{currentData.map((comment: CommentType) => (
					<Comment
						key={comment.id}
						createdAt={comment.createdAt}
						name={comment.name}
						email={comment.email}
						content={comment.content}
					/>
				))}
			</ul>
			<Pagination
				currentPage={currentPage}
				totalCount={items.length}
				pageSize={ITEMS_PER_PAGE}
				onPageChange={page => setCurrentPage(page)}
			/>
		</>
	);
};

export default Comments;
