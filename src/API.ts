type SourceType = {
	id: string;
	name: string;
};

export type NewsType = {
	author: string;
	content: string;
	description: string;
	publishedAt: Date;
	title: string;
	url: string;
	urlToImage: string;
};

export const fetchNews = async (topic: string, sortBy: string) => {
	const endpoint = `https://newsapi.org/v2/everything?q=${topic}&from=2021-12-26&sortBy=${sortBy}&apiKey=084a91ff5dff4294aa93e3fe785e48cc`;

	const res = await fetch(endpoint);
	const data = await res.json();
	return data;
};
