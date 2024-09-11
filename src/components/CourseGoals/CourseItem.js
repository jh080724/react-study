import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {
  return (
    <li className='goal-item' onClick={() => onDelete(item.id)}>
      {item.text}
    </li>
  );
};

export default CourseItem;

// import React from 'react';
// import './CourseItem.css';

// const CourseItem = ({ item }) => {
//   return <li className='goal-item'>{item.text}</li>;
// };

// export default CourseItem;
