import "./styles.css";
import React from 'react';
import { useAppDataContext } from "Context/AppDataContext";
import { useLocation } from "react-router-dom";
import { VideoCard } from "Components/VideoCard/VideoCard";

export const SearchedVideos = () => {
	const { state } = useAppDataContext();
	const search = new URLSearchParams(useLocation().search);

	const searchTerm = search.get("searchTerm");

	const filteredVideo = state?.videos?.filter(
		(video) =>
			video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			video.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
			video.author.toLowerCase().includes(searchTerm.toLowerCase())
	);
	
	return (
		<div className="searched-container">
			<div className="searched-main">
				{filteredVideo.length !== 0 ? (
					<>
						<div className="searched-head">
							<h1 className="searched-text">
								Search Results for - {searchTerm}
							</h1>
						</div>

						<section className="video-card-container">
							{filteredVideo.map((video) => (
								<VideoCard key={video._id} video={video} />
							))}
						</section>
					</>
				) : (
					<>
						<div className="searched-head">
							<h1>No search results for - "{searchTerm}" </h1>
						</div>
					</>
				)}
			</div>
		</div>
	);
};