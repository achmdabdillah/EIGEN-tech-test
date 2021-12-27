import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 400px;
	min-height: 600px;
	margin: auto;
	background: #ebfeff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;

	img {
		max-width: 300px;
		max-height: 200px;
	}

	.date {
		font-weight: 500;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;
