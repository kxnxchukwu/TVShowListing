import React from 'react';
import { Store } from '../Store';
import { IEpisodeProps } from '../interfaces';
import { fetchDataAction, toggleFavAction } from '../Actions';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodeList'));

const HomePage = () => {
    const {state, dispatch} = React.useContext(Store);
  
    React.useEffect(() => {
      state.episodes.length === 0 && fetchDataAction(dispatch)
    })
  
  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites
  }

  return (
      <>
    <React.Suspense fallback={<div><h1>Loading...</h1></div>}>
    <section className='episode-layout'>
      <EpisodeList { ...props} />
    </section>
    </React.Suspense>
      </>
  )
}

export default HomePage