import React, {useState} from 'react';
import { Link } from "react-router-dom";

const New = ( {onCreate} ) => {

  const [value, setValue] = useState('');

  function onsubmitHandler (event) {
    event.preventDefault();
    event.stopPropagation();

    if (value.trim()) {
      onCreate(value);
      setValue('')
    }
  }

  return (
    <>
      <form action='#' className="form" onSubmit={onsubmitHandler}>
        <input type="text" placeholder='Введите текст поста' className='input' value={value}/>

        <button className='button'>
          <Link to='/' className='btn'>
            Опубликовать
          </Link>
        </button>
      </form>
    </>
  );
};

export default New;
