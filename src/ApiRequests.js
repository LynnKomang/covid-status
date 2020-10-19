const dateFormat = require('dateformat');
import axios from 'axios';

export const getSummary = async (countryName) => {
	return (await axios.get('https://api.covid19api.com/summary')).data.Countries.find(
		({ Country }) => Country === countryName
	);
};

export const getAllCases = async (countryName) => {
	return (
		await axios.get(`https://api.covid19api.com/dayone/country/${countryName}`)
	).data.map((c) => ({ ...c, Date: dateFormat(c.Date, 'mmm dd yyyy') }));
};

export const getArticles = async () => {
	return (await axios.get(`${process.env.VUE_APP_ADDRESS}/articles`)).data;
};
