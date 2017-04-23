import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import MySimpleButton from '../src/components/MySimpleButton';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('MySimpleButton', module)
  .add('with text', () => (
    <MySimpleButton onClick={action('clicked')}>Hello Button</MySimpleButton>
  ))
  .add('with some emoji', () => (
    <MySimpleButton onClick={action('clicked')}>😀 😎 👍 💯</MySimpleButton>
  ));
