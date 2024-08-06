import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MediaList from './components/MediaList';
import AddMediaItem from './components/AddItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MediaList />} />
        <Route path="/filter/:type" element={<MediaList />} /> {/* New dynamic route */}
        <Route path="/watched" element={<MediaList />} />
        <Route path="/add" element={<AddMediaItem />} />
      </Routes>
    </Router>
  );
}

export default App;
