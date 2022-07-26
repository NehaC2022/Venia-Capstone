const Button = ({ text, onClick, className}) => {
    return (<>
        <button className={className} onClick={onClick} type="button">
            {text}
        </button></>);
}
export default Button;