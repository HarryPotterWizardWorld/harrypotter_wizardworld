import React, { useEffect, useState } from 'react';
import { Container, Text, Flex } from '@chakra-ui/react';
import getData from '@/utils/GetData';
import { CharactersCredentials } from '@/interfaces/CharactersCredentials';

const Home = () => {
  const [characters, setCharacters] = useState<CharactersCredentials[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterDetails = await getData();

        const mappedCharacters: CharactersCredentials[] = characterDetails.map((character: any) => ({
          name: character.name,
          house: character.house
        }));

        setCharacters(mappedCharacters);
      } catch (err) {
        setError('Erro ao obter os dados dos personagens.');
      }
    };

    fetchData();
  }, []);

  return (
    <Container p='3' flex='1' bg="rgba(5, 3, 43, 0.88)" borderRadius="12" border='none' maxHeight='88vh' h='100vh' w='800px'>
      {error && <Text>{error}</Text>}
      {characters.map((character) => (
        <Flex key={character.name} alignItems="center" justifyContent="space-between" borderBottom="1px solid #ccc" py={2}>
          <Text fontSize="lg">{character.name}</Text>
          <Text fontSize="md">{character.house}</Text>
        </Flex>
      ))}
    </Container>
  );
};

export default Home;
