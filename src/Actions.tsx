import { IState, IEpisode, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const URL = "https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  }

export const toggleFavAction = ( state: IState, dispatch: any, episode: IEpisode | any): IAction => {
  
  const episodeinFavourites = state.favourites.includes(episode);
  
  let dispatchObject = {
    type: "ADD_FAVOURITE",
    payload: episode
  };

  if(episodeinFavourites) {
    const newFavourites = state.favourites.filter((favourite: IEpisode) => favourite.id !== episode.id)
    dispatchObject = {
      type: "REMOVE_FAVOURITE",
      payload: newFavourites
    };
  }

  return dispatch(dispatchObject);
};