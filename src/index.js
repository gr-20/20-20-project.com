import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';

import STYLES from './index.css';

const c = classNames.bind(STYLES);

const state = {
  location: location.state,
  points: [
    <div>
      360KM
      <br />
      Distance
    </div>,
    <div>
      40KM
      <br />
      Combined elevation gain/loss
    </div>,
    <div>
      The GR-20
      <br />
      Both directions
      <br />
      In 20 days or less
    </div>,
    'THIS',
    'IS',
    'THE 20-20 PROJECT',
    'JUNE 2019'
  ]
};

const actions = {
  location: location.actions
};

const Home = () => {
  return (
    <div class={c('Home')}>
      <ul class={c('ProjectOverview')}>
        {state.points.map(point => (
          <li class={c('ProjectOverview__item')}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Kit = () => {
  return (
    <div class={c('Kit')}>
      <script src="https://lighterpack.com/e/1y6ig" />
      <div id="1y6ig" />
    </div>
  );
};

const view = (state, actions) => {
  return (
    <div class={c('Container')}>
      <Route path="/" render={Home} />
      <Route path="/kit" render={Kit} />
    </div>
  );
};

app(state, actions, view, document.getElementById('root'));
