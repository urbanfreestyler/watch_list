import { AddIcon, TimeIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MediaListHeader = ({ isWatched }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={4}>
      <IconButton as={Link} to="/" icon={isWatched ? <TimeIcon /> : <FaRegEye />} />
      <Box>
        <IconButton as={Link} to={isWatched ? '/' : '/watched'} variant="outline" icon={<TimeIcon />}>
          {isWatched ? <ViewIcon /> : <TimeIcon />}
        </IconButton>
        <IconButton as={Link} to="/add" variant="solid" icon={<AddIcon />}>
          {/* Icon only */}
        </IconButton>
      </Box>
    </Flex>
  );
};

export default MediaListHeader;
