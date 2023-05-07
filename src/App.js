/* eslint-disable import/no-extraneous-dependencies */
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapView from './pages/MapView';
import PostView from './pages/PostView';
// import LostForm from './pages/PostView2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MapView />} />
          <Route path="/post" element={<PostView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
