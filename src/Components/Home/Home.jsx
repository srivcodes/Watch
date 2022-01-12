import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { VideoCard } from 'Components/VideoCard/VideoCard';
import { useAppDataContext } from 'Context/AppDataContext';
import PulseLoader from 'react-spinners/PulseLoader';

export const Home = () => {
  const { state } = useAppDataContext();
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="discover-container">
          <div className="discover-head">Discover</div>
          <div className="discover-main">
            <div className="discover-photo">
              <p>
                India has a rich,
                <br />
                Illustrous,Resplendent and Abundant
                <br />
                textile industry
                <br />
              </p>
              <Link to="/explore?cat=basics">
                <button className="discover-button">Know How</button>
              </Link>
            </div>
            <div className="discover-edit">
              <p>
                Use Eco-friendly fabrics
                <br />
                and yet have a dapper wardrobe,
                <br />
                do your planet a favour
              </p>
              <Link to="/explore?cat=styling">
                <button className="discover-button">Know More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="popular-container">
          <div className="popular-head">Popular</div>
          <div
            className={`${
              state?.videos?.length !== 0 ? 'popular-main' : 'loader-container'
            }`}
          >
            {state?.videos?.length !== 0 ? (
              state?.videos
                ?.filter((video) => video?.category === 'Popular')
                ?.map((video) => {
                  return <VideoCard video={video} key={video._id} />;
                })
            ) : (
              <PulseLoader loading={true} size={15} color={'#6c5ecf'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


