import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      interval: null
    };

    // useEffect(() => {})
  }

  // making AJAX requests, setting up timers/intervals, set up a socket connection
  // useEffect(() => {}, []);
  // only called once
  componentDidMount() {
    console.log('the component has been added to the DOM');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    this.setState({ interval });
  }

  // gets called every time state and/or props change
  // useEffect(() => {}, [username]);
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.username !== this.state.username) {
    //   // username changed
    // }
    console.log('the component has updated');
  }

  // gets called only one time; when the component is about to be removed
  // perfect time for cleanup
  // useEffect that returns a function
  componentWillUnmount() {
    console.log('the component will be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <div>
          <label>Search Term</label>
          <input 
            value={this.state.searchTerm}
            onChange={(event) => this.setState({ searchTerm: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;
