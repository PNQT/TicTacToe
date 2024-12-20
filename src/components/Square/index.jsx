import classNames from 'classnames/bind';
import styles from './Square.module.scss';

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
    return ( 
        <button className={cx("square")} onClick={onSquareClick}>
           {value}
        </button>
     );
}

export default Square;