// button/button.stories.jsx
import { storiesOf } from '@storybook/vue';
import ButtonComponent from './button.jsx';

export default {
  title: 'Button',
  components: { ButtonComponent },
};

export const Default = () => ({
  components: { ButtonComponent },
  template: '<ButtonComponent>click me</ButtonComponent>',
});

storiesOf('Button', module).add('Default', Default);
