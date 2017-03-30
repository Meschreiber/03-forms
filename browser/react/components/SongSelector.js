import React, { Component } from 'react';
import { Link } from 'react-router';

class SongSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedSong}
        this.addSong = this.addSong.bind(this.addSong)
    }

    addSong(e) {
        this.setState({selectedSong: e.target.value})
    }

    render() {
        console.log(props)
    return (
        <div className="well">
            <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.addSong}>
                <fieldset>
                    <legend>Add to Playlist</legend>
                    <div className="form-group">
                        <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                        <div className="col-xs-10">
                            <select className="form-control" name="song">
                                <option value={}>song name</option>
                                <option value={}>another song name</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button type="submit" className="btn btn-success" >Add Song</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
    }

}




export default SongSelector