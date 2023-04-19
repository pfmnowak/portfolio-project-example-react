import { render, screen } from '@testing-library/react';
import ServiceItem from './ServiceItem';

describe('ServiceItem', () => {
	it('renders the title and text', () => {
		render(<ServiceItem text='Some random text' title='Test Item' icon='heart' />);

		const textContent = screen.getByText(/some random text/i);
		const title = screen.getByRole('heading', {
			name: /test item/i,
		});

		expect(textContent).toBeInTheDocument();
		expect(title).toBeInTheDocument();
	});

	it('renders the right img URL', () => {
		render(<ServiceItem text='Some random text' title='Test Item' icon='heart' />);

		const image = screen.getByRole('img', {
			name: /heart icon/i,
		});

		expect(image).toHaveAttribute('src', 'heart.png');
	});
});
