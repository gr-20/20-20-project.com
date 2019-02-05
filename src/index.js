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
  return (
    <div class={c('Container')}>
      <h1 class={c('MainHeading')}>THE 20-20 PROJECT</h1>
      <p>Coming soon...</p>
      {/* <ul class={c('ProjectOverview')}>
        <li class={c('ProjectOverview__item')}>+- 40km altitude gain/loss</li>
        <li class={c('ProjectOverview__item')}>+- 400km in distance</li>
        <li class={c('ProjectOverview__item')}>+- 15KG pack (camping)</li>
        <li class={c('ProjectOverview__item')}>Europe's toughest hike</li>
        <li class={c('ProjectOverview__item')}>
          The GR-20, in both directions, in 20 days or less
        </li>
      </ul> */}
    </div>
  );
};

app(state, actions, view, document.body);
