import React from 'react';
import Card from './components/UI/Card';

const NoName = (props) => {
  console.log('Noname component');
  console.log('props: ', props);

  return (
    <Card className='rectangle'>
      <div>
        {props.children}
        hello react
      </div>
    </Card>
  );
};

export default NoName;
