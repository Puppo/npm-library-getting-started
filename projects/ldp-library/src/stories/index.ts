import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CardComponent } from '../lib/components/card/card.component';

storiesOf('card', module)
.add('with some title opened', () => ({
  component: CardComponent,
  props: {
    title: 'Title card opened',
    opened: true
  }
}))
.add('with some title close', () => ({
  component: CardComponent,
  props: {
    title: 'Title card closed',
    opened: false
  }
}))
.add('with content projection', () => ({
  moduleMetadata: {
    declarations: [CardComponent]
  },
  template: `
    <ldp-card title="Hello" [opened]="true">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
    </ldp-card>
  `
}))
.add('with actions', () => ({
  component: CardComponent,
  props: {
    title: 'click me',
    toggle: action('title clicked')
  }
}));
