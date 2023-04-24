import { Ref, forwardRef } from 'react';
import { API_URL } from '../../constants';
import { Comment } from '../../types/types';
import Comments from '../Comments/Comments';
import DataContainer from '../DataContainer/DataContainer';
import classes from './CommentsSection.module.scss';

const CommentsSection = forwardRef(function CommentsSection(_props, ref: Ref<HTMLHeadingElement>) {
	const renderComments = (comments: Comment[] | undefined) => {
		if (!comments) {
			return <></>;
		}
		return <Comments items={comments} />;
	};

	return (
		<section className={classes['comments-section']}>
			<h4 ref={ref} className={classes['comments-section__header']}>
				Comments
			</h4>
			<DataContainer url={`${API_URL}/comments`} renderData={renderComments} />
		</section>
	);
});

export default CommentsSection;
