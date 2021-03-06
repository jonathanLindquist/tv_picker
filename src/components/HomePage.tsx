import React, { useContext, useEffect, lazy, Suspense } from "react";
import App from "../App";
import { Store } from "../store/store";
import { IEpisodeProps } from "../interfaces";
import { fetchDataAction } from "../actions/action";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
  };

  return (
    <App>
      {" "}
      <Suspense fallback={<div>loading...</div>}>
        {" "}
        <section className="episode-layout">
          {" "}
          <EpisodesList {...props} />{" "}
        </section>{" "}
      </Suspense>{" "}
    </App>
  );
};

export default HomePage;
