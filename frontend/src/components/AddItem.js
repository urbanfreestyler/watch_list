import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAddMediaItem } from '../api/hooks';

const AddMediaItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    media_type: 'Movie',
    year_of_production: '',
    genre: '',
    description: '',
  });
  const { addMediaItem } = useAddMediaItem();
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMediaItem(formData, navigate);
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      mt={5}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4} isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="media_type" mb={4} isRequired>
          <FormLabel>Type</FormLabel>
          <Select
            name="media_type"
            value={formData.media_type}
            onChange={handleChange}
          >
            <option value="Movie">Movie</option>
            <option value="Anime">Anime</option>
            <option value="Series">Series</option>
          </Select>
        </FormControl>
        <FormControl id="year_of_production" mb={4} isRequired>
          <FormLabel>Year of Production</FormLabel>
          <Input
            type="number"
            name="year_of_production"
            value={formData.year_of_production}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="genre" mb={4}>
          <FormLabel>Genre</FormLabel>
          <Input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Add Media Item
        </Button>
      </form>
    </Box>
  );
};

export default AddMediaItem;
