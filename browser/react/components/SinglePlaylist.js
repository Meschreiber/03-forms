import React from 'react';
import Songs from './Songs'
import SongSelector from './SongSelector'

export default class SinglePlaylist extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount ()
  {
    const selectPlaylist = this.props.selectPlaylist;
    const playlistId = this.props.routeParams.playlistId;

    selectPlaylist(playlistId);
  }

  componentWillReceiveProps(nextProps) {
    const selectPlaylist = this.props.selectPlaylist;
    if (nextProps.routeParams.playlistId !== this.props.routeParams.playlistId) {
      selectPlaylist(nextProps.routeParams.playlistId)
    }
  }

  render(){
  const playlist = this.props.selectedPlaylist;

  return (
    
      <div>
        <h3>{playlist.name}</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
        <hr />
        <SongSelector />
      </div>

  )
}
}
