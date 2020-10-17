import axios from 'axios';

export const getDetails = async (countryName) => {
	return (await axios.get('https://api.covid19api.com/summary')).data.Countries.find(
		({ Country }) => Country === countryName
	);
};
