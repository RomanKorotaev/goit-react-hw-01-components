
import s  from './Profile.module.css'
import PropTypes from 'prop-types';



function Profile (props) {
      const {
        name,
        tag,
        location = 'не известно',
        avatar = 'не известно',
        stats} = props;

        return (
            <div className={s.profile}>
  <div className="s.description">
    <img
        src={avatar}
        alt="Аватар пользователя"
        className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

                <ul className={s.stats}>
    <li>
        <span className={s.label}>Followers </span>
        <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
        <span className={s.label}>Views </span>
        <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
        <span className={s.label}>Likes </span>
        <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
        )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    //  Проверяем пришёл ли объект
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })

}

export default Profile;

/* 
//  Это пример react-компонента. По факту это функция, котрая возвращает нам разметку (родительский тег)
//  Не забывать везде закрывать теги (даже одинарные). Имена  react-компонентов ОБЯЗАТЕЛЬНО писать с БОЛЬШОЙ буквы. 
//  Иначе  jsx  не воспримеет её как переменную, а решит что это просто строка с тегом. Ничего не будет рендерится.
function Painting(props) {
    const {
        imageUrl = defaultImage, //так прописывается путь к дефолтной картинке
        url,
        title,
        author = 'не известно',
        price,
        quantity} = props;
    return (<div className={StylePainting.Painting}>
        <b className={StylePainting.PaintingTestStyleVariable}> Component: Painting.js (Тестируем применение</b>
        <b className={StylePainting.PaintingTestStyleVariable}>переменной css в подульных  css-файлах) </b>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={author.url}>{author.tag}</a>
        </p>
        <p className="TitleBorder">Цена: {price}  кредитов</p>   
        <p>Доступность:  { quantity < 10 ? 'заканчивается' : 'есть в наличии' } </p>
        <button type="button">Добавить в корзину</button>
    </div >
    );
}

// Выше импортируем библиотеку с проверкой типов  prop-types, а ниже пример использования
// если вместо цифры, например, в цене передать не число, а строку, то в консоле будет предупреждение об ошибке
Painting.propTypes = {
    imageUrl: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    quantity:PropTypes.number
}

export default Painting */
