import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import UploadPhotoScreen from './screens/UploadPhotoScreen';
import AirPhotoScreen from './screens/AirPhotoScreen';
import UserAirPhotosScreen from './screens/UserAirPhotosScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} excat />
            <Route path='/search/:keyword' element={<HomeScreen />} />
            <Route path='/photos' element={<HomeScreen />} excat />
            <Route path='/photos/search/:keyword' element={<HomeScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
              exact
            />

            <Route
              path='/photos/page/:pageNumber'
              element={<HomeScreen />}
              exact
            />
            <Route
              path='/photos/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
              exact
            />
            <Route path='/myphotos' element={<UserAirPhotosScreen />} />
            <Route path='/airphoto/:id' element={<AirPhotoScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/upload' element={<UploadPhotoScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
