import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';

import STYLES from './kit.css';

const c = classNames.bind(STYLES);

const state = {};

const actions = {};

const Kit = () => {
  return (
    <div class={c('Container')}>
      <script src="https://lighterpack.com/e/1y6ig" />
      <div id="1y6ig" />
    </div>
  );
};

const view = (state, actions) => {
  return <Kit />;
};

app(state, actions, view, document.getElementById('root'));
