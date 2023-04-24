import { Ref, forwardRef } from 'react';
import { API_URL } from '../../constants';
import { Comment as CommentType } from '../../types/types';
import Comment from '../Comment/Comment';
import DataContainer from '../DataContainer/DataContainer';
import classes from './Comments.module.scss';

const Comments = forwardRef(function Comments(_props, ref: Ref<HTMLHeadingElement>) {
	const comments = [
		{
			id: '1',
			name: 'name 1',
			email: 'email 1',
			content: 'content 1',
			createdAt: '2022-07-17T17:26:59.673Z',
		},
	];

	const renderComments = (comments: any[] | undefined) => {
		return (
			<ul className={classes.comments__items}>
				{comments &&
					comments.map((comment: CommentType) => (
						<Comment
							key={comment.id}
							createdAt={comment.createdAt}
							name={comment.name}
							email={comment.email}
							content={comment.content}
						/>
					))}
			</ul>
		);
	};

	return (
		<section className={classes.comments}>
			<h4 ref={ref} className={classes.comments__header}>
				Comments
			</h4>
			<DataContainer url={`${API_URL}/comments`} renderData={() => renderComments(comments)} />
		</section>
	);
});

export default Comments;
