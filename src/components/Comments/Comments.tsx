import { ITEMS_PER_PAGE, TOTAL_COUNT } from '../../constants';
import { Comment as CommentType } from '../../types/types';
import Comment from '../Comment/Comment';
import Pagination from '../ui/Pagination/Pagination';
import classes from './Comments.module.scss';

type CommentsProps = {
	items: CommentType[];
	currentPage: number;
	setCurrentPage: (page: number) => void;
};

const Comments = ({ items, currentPage, setCurrentPage }: CommentsProps) => {
	return (
		<>
			<ul className={classes.comments}>
				{items.map((comment: CommentType) => (
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
				totalCount={TOTAL_COUNT}
				// totalCount={items.length}
				pageSize={ITEMS_PER_PAGE}
				onPageChange={page => setCurrentPage(page)}
			/>
		</>
	);
};

export default Comments;
