import axios from 'axios/index';
import React, { useEffect } from 'react';
import { useAuth } from '../../../Context/index';
import { WATCH_API } from '../../../utils/index';
import { FaUserCircle } from 'react-icons/fa';
import './styles.css';

export const Profile = () => {
  const {
    state: { userDetails, token },
    dispatch,
    logout
  } = useAuth();
 const sampleData = useAuth();
 console.log(sampleData , "this is from profile");
  useEffect(() => {
    if (!userDetails) {
      (async () => {
        try {
          const {
            data: { response },
            status
          } = await axios({
            url: `${WATCH_API}/users/info`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log({ response });

          if (status === 200) {
            dispatch({
              type: 'SET_USER_DETAILS',
              payload: { userDetails: response }
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [token]);
  return (
    <div className="profile-container">
      <div className="profile-main">
        <div className="profile-card">
          <FaUserCircle className="profile-logo" />
          <div>
            <p className="profile-text">
              Firstname:{' '}
              <span className="primary-color">{userDetails?.firstname}</span>
            </p>
            <p className="profile-text">
              Lastname:{' '}
              <span className="primary-color">{userDetails?.lastname}</span>
            </p>
            <p className="profile-text">
              Email: <span className="primary-color">{userDetails?.email}</span>
            </p>
          </div>

          <button onClick={() => logout()} className="form-submit-cta">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
