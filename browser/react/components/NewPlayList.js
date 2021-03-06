import React from 'react';

const NewPlayList = function (props) {
    return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={props.handleChange} value={props.inputValue}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={!props.inputValue.length || props.inputValue.length > 16}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
      {props.inputValue ? null : <div className="alert alert-warning">Please enter a name</div>}
      {(props.inputValue.length > 16) ? <div className="alert alert-warning">Please enter a name with less than 16 characters</div> : null}
    </div>
)}

export default  NewPlayList;
