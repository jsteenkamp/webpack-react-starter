# Webpack React Starter

Hand-rolled starter similar to [Create React App](https://github.com/facebook/create-react-app) but without complexity that confronts you after ejecting. Aim is too keep tooling simple, know what each package does, and include specific core libraries. This makes it easier to understand and customize the tooling and provide patterns and components that use the core libraries.   

## New Tech Stack

### Webpack 4

[Webpack 4](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4) JavaScript bundler that also compiles JavaScript to ES6 using [Babel](https://babeljs.io).

### React 16.3

React 16 brings new `context` api, `ref` apis, and lifecycle methods with initial steps to start deprecating some existing lifecycle methods:

- [React v16.3](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
- [JSX Fragment syntax]((https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html#support-for-fragment-syntax)) `<>...</>` support requires [Babel 7](https://babeljs.io/blog/2017/09/12/planning-for-7.0).


### Core Libraries

#### Backend
- [Express](https://expressjs.com/) Node.js web application framework
- [Apollo Server](https://github.com/apollographql/apollo-server) GraphQL server for Express

#### Frontend
- [Apollo GraphQL](https://www.apollographql.com/) Open source GraphQL platform
- [Styled Components](https://github.com/styled-components/styled-components),  [styled-theming](https://github.com/styled-components/styled-theming), and [stylelint](https://stylelint.io/)
- [i18n](https://react.i18next.com/) with eay way to allow translation contributions. [Which i18n framework to choose?](https://medium.com/@jamuhl/get-your-react-js-application-translated-with-style-4ad090aefc2c)
- [Logging](https://github.com/cheeaun/javascript-error-logging). 

#### Testing
- Testing with [Jest (unit + integration)](https://facebook.github.io/jest/), [Cypress (e2e)](https://www.cypress.io/), [react-test-library](https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65)


### Maybe?

- [styled-system](http://jxnblk.com/styled-system/) provides design system utilities for styled-components and other css-in-js libraries
- [Tachyons functional CSS](https://tachyons.io/) [Utility-First CSS](https://medium.freecodecamp.org/in-defense-of-utility-first-css-4f406acee6fb)
- [Sentry](https://sentry.io/welcome/) looks like a good hosted logging service in a crowded space. Since it's hosted may not be suitable for all projects.
- Web workers when it makes sense using [workerize](https://github.com/developit/workerize)

### Type Checking

After configuring [Flow](https://flow.org/) (static type checker for JavaScript) I decided, as I have before, not to use type checking with Flow or [TypeScript](https://www.typescriptlang.org/). It adds unnecessary complexity with few benefits for a small project and team. I prefer to stick vanilla JavaScript and use React [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html). 


## Coding Standards

- Use modern JavaScript as supported by [Babel Stage 2](https://babeljs.io/docs/plugins/preset-stage-2/).
- Semicolons `;` are required, do not rely on automatic semicolon insertion.
- Use [Prettier](https://prettier.io/) with minor changes to the default configuration for code formatting.
- We do not enforce but prefer the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- We like these [noteworthy points](https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b) from the Google JavaScript style guide.
- Prefer [functional programming](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536) where possible (map, filter, reduce).
- Use CSS-in-JS with [Styled Components](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536) and [Polished](https://polished.js.org/).

## Browser Support

We support popular cross-platform evergreen web browsers which means [Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/). The application should work in other platform specific browsers such as [Apple Safari](https://www.apple.com/safari/) and [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).