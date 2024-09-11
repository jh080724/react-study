import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import ButtonComponent from '../UI/Button';
import styles from './AddUsers.module.css';
import ErrorModal from './ErrorModal';

const AddUser = ({ onAdd }) => {
  /*
이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해주세여.
가입처리 ? => App.js에 있는 USER_LIST에 객체 형태로 추가.
*/
  // const [userValue, setUserValue] = useState({
  //   userName: '',
  //   age: '',
  // });

  //에러상태를 관리하는 변수
  const [error, setError] = useState(null);

  // useRef로 기억된 Input 요소
  const nameInput = useRef();
  const ageInput = useRef();

  const userSubmitHandler = (e) => {
    e.preventDefault();

    console.log(nameInput);
    console.log(ageInput);

    if (
      nameInput.current.value.trim() === '' ||
      ageInput.current.value.trim() === ''
    ) {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하면 안된다앙~~',
      });
      return;
    }

    if (+ageInput.current.value < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1이상의 숫자로 작성해 주세요.',
      });
      return; // input에서 땡겨온 숫자는 Stiring으로 앞에 + 붙여서 숫자로 변경해서 비교한다.
    }

    onAdd({
      userName: nameInput.current.value,
      age: ageInput.current.value,
    });

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input id='username' type='text' ref={nameInput} />
          <label htmlFor='age'>나이</label>
          <input id='age' type='number' ref={ageInput} />
          <ButtonComponent type='submit'>가입하기</ButtonComponent>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
