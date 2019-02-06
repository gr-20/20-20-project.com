// eslint-disable-next-line no-unused-vars
import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';

import STYLES from './index.css';

const c = classNames.bind(STYLES);

const state = {
  visibleItemIndex: -1,
  isComplete: false,
  points: [
    {
      text: '400KM in distance',
      delay: 800,
      fontSize: '5rem'
    },
    {
      text: '40KM altitude gain/loss',
      delay: 2000,
      fontSize: '5rem'
    },
    // {
    //   text: '15KG pack (camping)',
    //   delay: 2800,
    //   fontSize: '3rem'
    // },
    // {
    //   text: "Europe's toughest hike",
    //   delay: 2800,
    //   fontSize: '3rem'
    // },
    {
      text: 'The GR-20, in both directions, in 20 days or less',
      delay: 2800,
      fontSize: '3rem'
    },
    {
      text: 'THIS',
      delay: 2800,
      fontSize: '8rem'
    },
    {
      text: 'IS',
      delay: 1200,
      fontSize: '8rem'
    },
    {
      text: 'THE 20-20 PROJECT',
      delay: 1200,
      fontSize: '6rem'
    }
  ]
};

const actions = {
  setVisibleItem: index => () => ({
    visibleItemIndex: index
  }),
  setCompletedState: isComplete => ({
    isComplete
  }),
  showPoint: () => (state, actions) => {
    const nextPointIndex = state.visibleItemIndex + 1;
    const point = state.points[nextPointIndex];
    setTimeout(() => {
      actions.setVisibleItem(nextPointIndex);
      if (nextPointIndex < state.points.length - 1) {
        actions.showPoint();
      } else {
        setTimeout(() => {
          actions.setCompletedState(true);
        }, 1600);
      }
    }, point.delay);
  },
  onContainerCreate: evt => (state, actions) => {
    actions.showPoint();
  }
};

const view = (state, actions) => {
  return (
    <div class={c('Container')} oncreate={actions.onContainerCreate}>
      <ul class={c('ProjectOverview')}>
        {state.points.map((point, index) => {
          const isVisible = state.visibleItemIndex === index;
          const style = isVisible ? { fontSize: point.fontSize } : {};
          return (
            <li
              class={c('ProjectOverview__item', {
                'ProjectOverview__item--visible': isVisible
              })}
              style={style}
            >
              {point.text}
            </li>
          );
        })}
        {state.isComplete && (
          <li
            class={c('ProjectOverview__item', {
              'ProjectOverview__item--visible': true
            })}
          >
            JUNE 2019
          </li>
        )}
      </ul>
    </div>
  );
};

app(state, actions, view, document.getElementById('root'));
