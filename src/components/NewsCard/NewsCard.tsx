import React from 'react';
// Types
import { NewsType } from '../../API';
import { Wrapper } from '../NewsCard/NewsCard.styles';

const NewsCard: React.FC<NewsType> = ({
	author,
	content,
	publishedAt,
	title,
	url,
	urlToImage,
}) => {
	let showContent = content.split(' ').slice(0, -2).join(' ');

	var date = new Date(publishedAt).toLocaleDateString();
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const day = new Date(publishedAt).getDay();

	var time = new Date(publishedAt)
		.toLocaleTimeString()
		.replace(/(.*)\D\d+/, '$1');

	return (
		<Wrapper>
			<div className="img">
				<img src={urlToImage} alt={title} />
			</div>
			<div className="content">
				<h1>{title}</h1>
				<p>
					{showContent}{' '}
					<a target="_blank" href={url}>
						read more
					</a>
				</p>
				<p className="date">
					{weekday[day]}, {date} {time}
				</p>
			</div>
		</Wrapper>
	);
};

export default NewsCard;
