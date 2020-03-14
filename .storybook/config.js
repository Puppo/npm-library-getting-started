import { configure } from '@storybook/angular';

function loadStories() {
  require('../projects/ldp-library/src/stories/index.ts');
}

configure(loadStories, module);
