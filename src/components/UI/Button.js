import React from 'react';
import './Button.css';

// 반복되는 태그가 다양한 속성을 가지게 된다면
// 컴포넌트로 분할해서 속성값을 일괄적으로 처리할 수 있게 하자.
// input이 이렇게 많이 쓰인다.
const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
