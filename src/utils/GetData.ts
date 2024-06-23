import axios from 'axios';

const getData = async (): Promise<any> => {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    const charactersResults = response.data.results;

    const characterDetailsPromises = charactersResults.map((character: any) => axios.get(character.url));
    const characterDetailsResponses = await Promise.all(characterDetailsPromises);

    return characterDetailsResponses.map(res => res.data);
}

export default getData;
