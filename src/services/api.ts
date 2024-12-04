import axios from 'axios';

const baseUrl = "https://fakerapi.it/api/v1/images";
export const getFakerData = async () => {
    try {
        const response = await axios.get(`${baseUrl}?_width=380`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Faker API data:", error);
        return null;
    }
};
