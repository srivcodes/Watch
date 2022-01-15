import axios from 'axios';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAppDataContext } from 'Context/AppDataContext';
import { useAuth } from 'Context/AuthContext';
import { WATCH_API, setupAuthExceptionHandler } from 'Utils/data';
import './App.css';

import { Header } from 'Components/Header/Header';
import { Home } from 'Components/Home/Home';
import { PrivateRoute } from 'Components/Auth/PrivateRoute';
import { Liked } from 'Components/VideoPages/Liked/Liked';
import { Playlists } from 'Components/VideoPages/Playlists/Playlists';
import { History } from 'Components/VideoPages/History/History';
import { Explore } from 'Components/VideoPages/Explore/Explore';
import { Login } from 'Components/Auth/Login';
import { Signup } from 'Components/Auth/Signup';
import { ForgotPassword } from 'Components/Auth/ForgotPassword';
import { Nav } from 'Components/Nav/Nav';
import { PhoneNav } from 'Components/Nav/PhoneNav';
import { VideoDetails } from 'Components/VideoDetails/VideoDetails';
import { ErrorPage } from 'Components/ErrorPage/ErrorPage';
import { Profile } from 'Components/Auth/Profile/Profile';
import { SearchedVideos } from 'Components/VideoPages/SearchedVideos/SearchedVideos';
import { PlaylistVideos } from 'Components/VideoPages/Playlists/PlaylistVideos';

function App() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppDataContext();
  const {
    state: { token },
    logout
  } = useAuth();

  useEffect(() => {
    setupAuthExceptionHandler(logout, navigate);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${WATCH_API}/videos`);
        dispatch({ type: 'SET_VIDEOS', payload: data.response });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const {
            data: {
              response: { customPlaylists, historyPlaylist, likedPlaylist }
            }
          } = await axios({
            url: `${WATCH_API}/playlists`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          dispatch({ type: 'SET_PLAYLISTS', payload: customPlaylists });

          dispatch({ type: 'SET_LIKED', payload: likedPlaylist });

          dispatch({ type: 'SET_HISTORY', payload: historyPlaylist });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [token]);


  return (
    <div className="App">
      <div className="app-container">
        <div className="app-main">
          <Header />
          <Nav />
          <div className="main-routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:vidId" element={<VideoDetails />} />

              <Route
                path="/liked"
                element={
                  <PrivateRoute>
                    <Liked />
                  </PrivateRoute>
                }
              />
              <Route
                path="/playlists"
                element={
                  <PrivateRoute>
                    <Playlists />
                  </PrivateRoute>
                }
              />
              <Route
                path="/playlists/:playlistId"
                element={
                  <PrivateRoute>
                    <PlaylistVideos />
                  </PrivateRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <PrivateRoute>
                    <History />
                  </PrivateRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-pass" element={<ForgotPassword />} />

              <Route path="/search" element={<SearchedVideos />} />

              <Route path="*" element={<ErrorPage />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        <PhoneNav />
      </div>
    </div>
  );
}

export default App;
