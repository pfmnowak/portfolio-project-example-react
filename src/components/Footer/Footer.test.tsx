import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
	it('displays the Copyright info', () => {
		render(<Footer />);

		const copyright = screen.getByText(/copyright/i);

		expect(copyright).toBeInTheDocument();
	});
});
