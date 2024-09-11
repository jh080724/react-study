import React from 'react';
import styled from 'styled-components';
// import './Button.css';

// styled-components 가 제공하는 styled를 사용해서 원하는 태그를 생성하고
// 해당 태그에 디자인을 문자열로 바로 지정할 수 있다.
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// 반복되는 태그가 다양한 속성을 가지게 된다면
// 컴포넌트로 분할해서 속성값을 일괄적으로 처리할 수 있게 하자.
// input이 이렇게 많이 쓰인다.

// styled-components 를 사용하면서 props를 처리하고 싶다면
// 중간 단계의 컴포넌트를 하나 더 추가하면 됨.
const ButtonComponent = ({ type, onClick, children }) => {
  return (
    <Button className='button' type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
