import './explore.css';
import React from 'react';
import { VideoCard } from 'Components/VideoCard/VideoCard';
import { useLocation, NavLink } from 'react-router-dom';
import { categories } from 'Utils/data';
import { useAppDataContext } from 'Context/AppDataContext';

import PulseLoader from 'react-spinners/PulseLoader';

export const Explore = () => {
  const { state } = useAppDataContext();
  const search = new URLSearchParams(useLocation().search);
  const searchedCategory = search.get('category')
    ? search.get('category')
    : 'All Videos';
  return (
    <div className="explore-container">
      <div className="explore-main">
        <nav className="category-toggle">
          {categories
            .filter(({ id }) => id !== 'popular')
            .map(({ id, label }) => {
              return (
                <NavLink
                  to={`?category=${id}`}
                  key={id}
                  className={`category-cta ${
                    searchedCategory === id ? 'category-cta-active' : ''
                  }`}
                >
                  {label}
                </NavLink>
              );
            })}
        </nav>
        {state.videos && state.videos.length ? (
          <section className="video-card-container">
            {searchedCategory === 'all_videos' && state.videos
              ? state.videos.map((video) => {
                  return <VideoCard video={video} key={video._id} />;
                })
              : state.videos
                  .filter((video) => video.id === searchedCategory)
                  .map((video) => {
                    return <VideoCard video={video} key={video._id} />;
                  })}
          </section>
        ) : (
          <div className="loader-container">
            <PulseLoader loading={true} size={15} color={'rgb(78, 33, 150, 0.9)'} />
          </div>
        )}
      </div>
    </div>
  );
};
