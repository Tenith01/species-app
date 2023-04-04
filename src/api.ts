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

export const fetchSpeciesImages = async (speciesKey: number, limit: number = 10) => {
    const url = `https://api.gbif.org/v1/occurrence/search?taxon_key=${speciesKey}&media_type=stillImage&limit=${limit}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
};