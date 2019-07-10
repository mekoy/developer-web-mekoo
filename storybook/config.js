import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import 'sanitize.css/sanitize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@babel/polyfill';

// import translation messages
import { translationMessages } from 'i18n';

// Add global style
import 'global-styles';

const e = React.createElement;

// add a decorator to wrap stories rendering into IntlProvider
const DEFAULT_LOCALE = 'fr';
addDecorator(story => (
  e(IntlProvider,
    {
      locale: DEFAULT_LOCALE,
      messages: translationMessages[DEFAULT_LOCALE],
    },
    story(),
  )
));

if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')(); // eslint-disable-line global-require
}

const req = require.context('../src', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
