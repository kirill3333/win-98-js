import React from 'react';
import ReactDOM from 'react-dom';

import Window from '../src/components/Window';

class App extends React.Component {
  render() {
    return <Window width={1000} height={100} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
