import { ReactNode } from 'react';
import { formatDateFull } from '../../helpers/formatDate';
import classes from './Comment.module.scss';

type CommentProps = {
	createdAt: string;
	name: string;
	email: string;
	content: string;
	children?: ReactNode;
};

const Comment = ({ createdAt, name, email, content }: CommentProps) => {
	return (
		<li className={classes.comment}>
			<p className={classes.comment__date}>{formatDateFull(createdAt)}</p>
			<p className={classes.comment__user}>
				{name} {email ? email : '-'}
			</p>
			<p className={classes.comment__content}>{content ? content : '-'}</p>
		</li>
	);
};

export default Comment;
