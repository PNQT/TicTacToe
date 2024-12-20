// eslint-disable-next-line react/prop-types
function Button({ children, onClick }) {
    return ( 
        <button onClick={onClick}>{children}</button>
     );
}

export default Button;