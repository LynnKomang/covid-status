import axios from 'axios';
import config from '../config';

export const getDetails = async (countryName) => {
	return (await axios.get('https://api.covid19api.com/summary')).data.Countries.find(
		({ Country }) => Country === countryName
	);
};

export const getArticles = async () => {
	return (
		await axios.get(
			`https://newsapi.org/v2/everything?apiKey=${config.API_KEY}&q=קורונה&sortBy=publishedAt`
		)
	).data.articles.slice(0, 10);
};
