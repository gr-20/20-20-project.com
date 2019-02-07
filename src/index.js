import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';

import STYLES from './index.css';

const c = classNames.bind(STYLES);

const state = {
  points: [
    '400KM in distance',
    '40KM altitude gain/loss',
    'GR-20, both directions, in 20 days or less',
    'THIS',
    'IS',
    'THE 20-20 PROJECT',
    'JUNE 2019'
  ]
};

const actions = {};

const view = (state, actions) => {
  return (
    <div class={c('Container')}>
      <ul class={c('ProjectOverview')}>
        {state.points.map(point => (
          <li class={c('ProjectOverview__item')}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

app(state, actions, view, document.getElementById('root'));
