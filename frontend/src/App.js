import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import MediaList from './components/MediaItem';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddMediaItem from './components/AddItem';

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MediaList />} />
          <Route path="/watched" element={<MediaList />} />
          <Route path="/add" element={<AddMediaItem />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
