import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';

initStoryshots({
  test: shallowSnapshot,
  configPath: 'storybook',
});
