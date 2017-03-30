import React, { Component } from 'react';
import Artists from '../components/Artists';
import NewPlayList from '../components/NewPlayList'
import axios from 'axios'
import { browserHistory } from 'react-router'

export default class NewPlayListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      let id;
      axios.post('/api/playlists/', { name: this.state.inputValue })
        .then(res => res.data)
        .then(result => {
          id = result.id
					const path = `/playlists/${id}`
					browserHistory.push(path)
        });

      this.setState({
        inputValue: ''
      })
			console.log(id)
      e.preventDefault();
    }

    handleChange(e){
        const value = e.target.value
        this.setState({
            inputValue: value
        })
    }


    render () {
        const inputValue = this.state.inputValue;
        return (
            <div>
            <NewPlayList handleChange={this.handleChange} handleSubmit ={this.handleSubmit} inputValue = {inputValue}/>
            </div>
        )
    }
}
