import { Ref, forwardRef } from 'react';
import { API_URL } from '../../constants';
import { Comment as CommentType } from '../../types/types';
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
			<ul className={classes.qualifications}>
				{comments &&
					comments.map((comment: CommentType) => (
						<>
							<p>{comment.createdAt}</p>
							<p>
								{comment.name} {comment.email}
							</p>
							<p>{comment.content}</p>
						</>
					))}
			</ul>
		);
	};

	return (
		<div className={classes.comments}>
			<h4 ref={ref}>Comments</h4>
			<DataContainer url={`${API_URL}/comments`} renderData={() => renderComments(comments)} />
		</div>
	);
});

export default Comments;
