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
    {/* <h1 class={c('MainHeading')}>40km altitude gain/loss</h1>
    <h1 class={c('MainHeading')}>400km in distance</h1>
    <h1 class={c('MainHeading')}>15KG pack and camping</h1>
    <h1 class={c('MainHeading')}>Europe's toughest hike</h1>
    <h1 class={c('MainHeading')}>The GR-20, in both directions, in 20 days or less</h1>
    <h1 class={c('MainHeading')}>THIS</h1>
    <h1 class={c('MainHeading')}>IS</h1> */}
    <h1 class={c('MainHeading')}>THE 20-20 PROJECT</h1>
    <p>Coming soon...</p>
  </div>
  );
};

app(state, actions, view, document.body);
