import React from 'react';
import { JsxElement } from 'typescript';
import { IEpisode } from '../interfaces';

const EpisodeList = (props: any): Array<JsxElement> => {
    const {episodes, toggleFavAction, favourites, store: {state, dispatch}} = props;

    return episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className='episode-box'>
            <img src={episode.image.medium} alt={`Girls ${episode.name}`} />
            <div>{episode.name}</div>
            <section>
              <div style={{display: "flex", justifyContent: "space-between"}}>
              Season: {episode.season} Number: {episode.number}
              <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                {favourites.find((favourite: IEpisode) => favourite.id === episode.id) ? "Unfavourite" : "Favourite"}
                </button>
              </div>
            </section>
          </section>
        )
      })
}

export default EpisodeList;