import { Ref, forwardRef, useState } from 'react';
import { API_URL, ITEMS_PER_PAGE } from '../../constants';
import { Comment } from '../../types/types';
import Comments from '../Comments/Comments';
import DataContainer from '../DataContainer/DataContainer';
import CustomContainer from '../ui/CustomContainer/CustomContainer';
import classes from './CommentsSection.module.scss';

const CommentsSection = forwardRef(function CommentsSection(_props, ref: Ref<HTMLHeadingElement>) {
	const [currentPage, setCurrentPage] = useState(1);
	const [order, setOrder] = useState('desc');

	const renderComments = (comments: Comment[] | undefined) => {
		if (!comments) {
			return <></>;
		}
		return (
			<Comments
				items={comments}
				currentPage={currentPage}
				setCurrentPage={page => setCurrentPage(page)}
			/>
		);
	};

	return (
		<section className={classes['comments-section']}>
			<CustomContainer>
				<div className={classes['comments-section__header']}>
					<h4 ref={ref} className={classes['comments-section__heading']}>
						Comments
					</h4>
					<div className={classes['comments-section__buttons']}>
						<p className={classes['comments-section__order-btn']} onClick={() => setOrder('asc')}>
							oldest
						</p>
						|
						<p className={classes['comments-section__order-btn']} onClick={() => setOrder('desc')}>
							newest
						</p>
					</div>
				</div>
				<DataContainer
					url={`${API_URL}/comments/?page=${currentPage}&limit=${ITEMS_PER_PAGE}&sortBy=createdAt&order=${order}`}
					renderData={renderComments}
				/>
			</CustomContainer>
		</section>
	);
});

export default CommentsSection;
