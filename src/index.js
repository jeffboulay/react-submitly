import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Submitly from './submitly';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Submitly />, document.getElementById('root'));
registerServiceWorker();
