import {
    Badge,
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CheckIcon, StarIcon } from '@chakra-ui/icons';
import { useFetchMediaItems, useUpdateMediaItem } from '../api/hooks';

const MediaList = () => {
  const location = useLocation();
  const isWatched = location.pathname === '/watched';

  const { mediaItems, loading } = useFetchMediaItems(isWatched);
  const { updateMediaItem } = useUpdateMediaItem();

  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMarkAsWatched = item => {
    setSelectedItem(item);
    onOpen();
  };

  const handleSubmitRating = () => {
    if (!rating || rating < 1 || rating > 10) {
      alert('Please enter a valid rating between 1 and 10.');
      return;
    }

    updateMediaItem(selectedItem.id, { watched: true, rating }, updatedItem => {
      //   setMediaItems(prevItems =>
      //     prevItems.map(item => (item.id === updatedItem.id ? updatedItem : item))
      //   );
      onClose();
    });
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box maxW="800px" mx="auto" mt={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg" color="brand.500">
          {isWatched ? 'Watched List' : 'To-Watch List'}
        </Heading>
        <Button as={Link} to={isWatched ? '/' : '/watched'} variant="outline">
          {isWatched ? 'View To-Watch List' : 'View Watched List'}
        </Button>
        <Button as={Link} to="/add" variant="solid">
          Add
        </Button>
      </Flex>
      <Stack spacing={5}>
        {mediaItems.map(item => (
          <Flex
            key={item.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _hover={{ bg: 'gray.50' }}
            alignItems="center"
          >
            <Image
              src={`https://via.placeholder.com/100x150.png?text=${item.media_type}`}
              alt={item.title}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
              mr={4}
            />
            <Box flex="1">
              <Heading as="h2" size="md" color="gray.800">
                {item.title}
              </Heading>
              <Text color="gray.600">Type: {item.media_type}</Text>
              <Text color="gray.600">Year: {item.year_of_production}</Text>
              {item.watched && (
                <Badge colorScheme="green" mt={2}>
                  Watched
                </Badge>
              )}
              {item.rating && (
                <Badge colorScheme="yellow" mt={2} ml={2}>
                  <StarIcon mr={1} /> {item.rating}/10
                </Badge>
              )}
            </Box>
            {!item.watched && (
              <Button
                variant="solid"
                colorScheme="teal"
                onClick={() => handleMarkAsWatched(item)}
                leftIcon={<CheckIcon />}
              >
                {/* No text, just icon */}
              </Button>
            )}
          </Flex>
        ))}
      </Stack>

      {/* Modal for Rating Input */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate {selectedItem?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="rating" isRequired>
              <FormLabel>Rating (1-10)</FormLabel>
              <Input
                type="number"
                value={rating}
                onChange={e => setRating(e.target.value)}
                min="1"
                max="10"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="solid" mr={3} onClick={handleSubmitRating}>
              Submit
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MediaList;
