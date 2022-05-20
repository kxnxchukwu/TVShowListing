import React from "react";
import { Store } from "../Store";
import { toggleFavAction } from "../Actions";
import { IFaveProps } from "../interfaces";

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodeList'));

const FavPage = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);
    const props: IFaveProps = {
        episodes: state.favourites,
        store: {state, dispatch},
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <React.Suspense fallback={<div><h1>Loading...</h1></div>}>
        <section className='episode-layout'>
          <EpisodeList { ...props} />
        </section>
        </React.Suspense> 
    )
}

export default FavPage;