import React from "react";
import { IEpisode } from "../interfaces";

const Episode = (props: IEpisode): JSX.Element => (
  <section key={props.id} className="episode-box">
    <img
      src={!!props.image ? props.image.medium : ""}
      alt={`Money Heist ${props.name}`}
    />
    <div>{props.name}</div>
    <section>
      <div>
        {" "}
        Season: {props.season} Number: {props.number}{" "}
      </div>
      <button type="button"> Fav </button>
    </section>
  </section>
);

export default Episode;
