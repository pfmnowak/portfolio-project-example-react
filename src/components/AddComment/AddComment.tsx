import { useRef } from 'react';
import { API_URL } from '../../constants';
import Button from '../ui/Button/Button';
import CustomContainer from '../ui/CustomContainer/CustomContainer';
import classes from './AddComment.module.scss';

const AddComment = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLTextAreaElement>(null);

	const submitFormHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const rawResponse = await fetch(`${API_URL}/comments`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: nameRef.current?.value ?? '',
				email: emailRef.current?.value ?? '',
				content: contentRef.current?.value ?? '',
			}),
		});

		rawResponse.ok && clearInputs();
	};

	const clearInputs = () => {
		if (nameRef.current) nameRef.current.value = '';
		if (emailRef.current) emailRef.current.value = '';
		if (contentRef.current) contentRef.current.value = '';
	};

	return (
		<section className={classes['add-comment']}>
			<CustomContainer>
				<h4 className={classes['add-comment__heading']}>Add comment</h4>
				<form onSubmit={submitFormHandler} className={classes.form}>
					<div className={classes.form__user}>
						<input
							type='text'
							ref={nameRef}
							placeholder='Your Name'
							className={classes.form__input}
							required
						/>
						<input
							type='email'
							ref={emailRef}
							placeholder='Your Email'
							className={classes.form__input}
							required
						/>
					</div>
					<textarea
						ref={contentRef}
						placeholder='Your Messages'
						className={classes.form__content}
						rows={4}
						required
					/>
					<Button type='submit'>Send</Button>
				</form>
			</CustomContainer>
		</section>
	);
};

export default AddComment;
