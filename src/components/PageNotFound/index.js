import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  // const history = useNavigate();

  // const goToHomePage = () => {
  //   history.push('/');
  // };
  return (
    <div>
      <h2>Помилка 404</h2>
      <h1>Сторінка не знайдена</h1>
      <h3>Неправильно набрана адреса або такої сторінки на сайті більше не існує.</h3>
      <Link to="/"><button>Перейти на головну сторінку</button></Link>
      {/* <button
            type="button"
            onClick={goToHomePage}
          >
            Перейти на головну сторінку
          </button> */}
    </div>
  );
}

export default PageNotFound;

