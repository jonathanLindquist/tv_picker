import React from "react";
import { IEpisode, IProps } from "../interfaces";
import Episode from "./Episode";

const EpisodesList = (props: IProps): Array<JSX.Element> => {
  const { episodes } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={!!episode.image ? episode.image.medium : ""}
          alt={`Money Heist ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>
            {" "}
            Season: {episode.season} Number: {episode.number}{" "}
          </div>
          <button type="button"> Fav </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
