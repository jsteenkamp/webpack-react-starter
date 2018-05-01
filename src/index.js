import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ClassComp from 'Components/ClassComponent';
import FunctionalComp from 'Components/FunctionalComponent';
import PropTypeComp from 'Components/PropTypesComponent';
import Card from 'Components/Card';

const Index = () => {
  // a number
  const ts = new Date().getTime();

  return (
    <Fragment>
      <h1>Hello React!</h1>
      <ClassComp value={ts} />
      <FunctionalComp value={`${ts}`} />
      <PropTypeComp value={`${ts}`} />
      <Card
        card={{
          title: 'Card Title',
          description: 'Card description',
          score: 100,
          active: true,
        }}
      />
    </Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
