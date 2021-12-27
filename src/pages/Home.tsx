import { useState, useEffect } from 'react';
import { fetchNews, NewsType } from '../API';
import NewsCard from '../components/NewsCard/NewsCard';
import '../App.css';

export enum Topic {
	BUSINESS = 'business',
	ENTERTAINMENT = 'entertainment',
	GENERAL = 'general',
	HEALTH = 'health',
	SCIENCE = 'science',
	SPORTS = 'sports',
	TECHNOLOGY = 'technology',
}

export enum SortBy {
	RELEVANCY = 'relevancy',
	POPULARITY = 'popularity',
}
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<NewsType[]>([]);

	const getNews = async () => {
		try {
			setLoading(true);
			const res = await fetchNews(Topic.HEALTH, SortBy.RELEVANCY);
			setData(res.articles);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getNews();
	}, []);

	return (
		<div className="App">
			<h1>News</h1>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<div className="grid">
					{data.map((news, i) => (
						<NewsCard
							key={i}
							author={news.author}
							content={news.content}
							description={news.description}
							publishedAt={news.publishedAt}
							title={news.title}
							url={news.url}
							urlToImage={news.urlToImage}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
