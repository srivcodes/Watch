import axios from 'axios';
import { WATCH_API } from './data';

export const createPlaylist = async ({
  token,
  video,
  dispatch,
  title,
  setPlaylistTitle
}) => {
  try {
    const {
      data: { response }
    } = await axios({
      method: 'POST',
      url: `${WATCH_API}/playlists`,
      data: {
        title,
        videos: [{ video: video._id, date: new Date().toDateString() }]
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: 'ADD_PLAYLIST',
      payload: response
    });
    setPlaylistTitle('');
  } catch (error) {
    console.error(error);
  }
};

export const addOrRemoveVideoInPlaylist = async ({
  token,
  playlistId,
  video,
  type,
  dispatch
}) => {
  try {
    const {
      data: { response }
    } = await axios({
      method: 'POST',
      url: `${WATCH_API}/playlists/${playlistId}/videos`,
      data: {
        video,
        date: new Date().toDateString()
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const addVideosInPlaylist = async ({
  token,
  playlistId,
  video,
  type,
  dispatch
}) => {
  try {
    const {
      data: { response }
    } = await axios({
      method: 'POST',
      url: `${WATCH_API}/playlists/${playlistId}/videos/add`,
      data: {
        video,
        date: new Date().toDateString()
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const updatePlaylistTitle = async ({
  playlistId,
  title,
  type,
  token,
  dispatch
}) => {
  try {
    const {
      data: { response }
    } = await axios({
      url: `${WATCH_API}/playlists/${playlistId}`,
      method: 'POST',
      data: { title },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({ type: 'UPDATE_PLAYLIST', payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deletePlaylist = async ({ token, playlistId, dispatch }) => {
  try {
    const {
      data: { response }
    } = await axios({
      url: `${WATCH_API}/playlists/${playlistId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({ type: 'DELETE_PLAYLIST', payload: response._id });
  } catch (error) {
    console.error(error);
  }
};

export const clearHistory = async ({ token, playlistId, dispatch }) => {
  try {
    const {
      data: { response }
    } = await axios({
      url: `${WATCH_API}/playlists/${playlistId}`,
      method: 'POST',
      data: {
        videos: []
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({ type: 'SET_HISTORY', payload: response });
  } catch (error) {
    console.error(error);
  }
};
