// src/api.ts
import axios from 'axios';

export const fetchSpeciesData = async (speciesName: string) => {
    const url = `https://api.gbif.org/v1/species/match?verbose=false&name=${speciesName}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};