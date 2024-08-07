import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MediaList from './components/MediaList';
import AddMediaItem from './components/AddItem';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    
    <Box
    minHeight="100vh"
    background="linear-gradient(135deg, #2b1055, #7597de)"
    color="white"
    p={4}
    backdropFilter="blur(10px)"
  >
    <Router>
      <Routes>
        <Route path="/" element={<MediaList />} />
        <Route path="/filter/:type" element={<MediaList />} /> {/* New dynamic route */}
        <Route path="/watched" element={<MediaList />} />
        <Route path="/add" element={<AddMediaItem />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
