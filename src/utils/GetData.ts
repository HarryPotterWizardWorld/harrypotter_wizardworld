import axios from 'axios';

const getData = async (): Promise<any> => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    const charactersResults = response.data;

    console.log('charactersResults:', charactersResults);

    const characterDetailsPromises = charactersResults.map((character: any) => axios.get(character.url));
    const characterDetailsResponses = await Promise.all(characterDetailsPromises);

    console.log('characterDetailsResponses:', characterDetailsResponses);

    return characterDetailsResponses.map(res => res.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getData;
