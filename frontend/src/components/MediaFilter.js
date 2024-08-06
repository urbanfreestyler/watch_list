import React from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const MediaFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentType = searchParams.get('media_type');

  const handleTypeClick = (type) => {
    if (currentType === type) {
      searchParams.delete('media_type'); // Deselect if the same type is clicked
    } else {
      searchParams.set('media_type', type); // Select the new type
    }
    setSearchParams(searchParams);
  }
  const types = ['movie', 'anime', 'series'];

  return (
    <Flex justifyContent="center" mb={4}>
      <ButtonGroup isAttached variant="outline">
        {types.map(type => (
          <Button
            key={type}
            onClick={() => handleTypeClick(type)}
            colorScheme={currentType === type ? 'teal' : 'gray'}
            borderRadius="full"
            mx={1}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default MediaFilter;
