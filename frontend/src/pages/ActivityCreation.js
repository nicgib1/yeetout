import React, { Component } from 'react';  
class ActivityCreation extends Component{
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      alert('The value is: ' + this.input.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <div className="App-header">
        <h2>Create an Activity</h2>
        <label>
          Activity:
          <input
            type="activity"
            value={activity}
            onChange={e => setActivity(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
          Party Size:
          <input
            type="text"
            value={partySize}
            onChange={e => setPartySize(e.target.value)}
          />
        </label>
        <label>
          Tags:
          <select multiple={true} value={['outdoors', 'indoors', 'sports', 'concert']}>
          {/* <select value={this.state.value} onChange={this.handleChange}>
            <option value="outdoors">Outdoors</option>
            <option value="indoors">Indoors</option>
            <option value="sports">Sports</option>
            <option value="Concerts">Concert</option>
          </select> */}
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={e => setBio(e.target.value)} />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
      );
    }
}
   

  export default ActivityCreation;