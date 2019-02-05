// eslint-disable-next-line no-unused-vars
import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';
import 'purecss/build/base.css';

import STYLES from './index.css';

const c = classNames.bind(STYLES);

const state = {
  foo: null
};

const actions = {
  // exampleAction: evt => (state, actions) => {
  // }
};

const view = (/*state, actions*/) => {
  return (<div class={c('Container')}>
    <h1>The 20 20 Project</h1>
    <p>Coming soon...</p>
  </div>
  );
};

app(state, actions, view, document.body);
