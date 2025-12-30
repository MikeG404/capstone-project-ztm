import "./button.style.scss";

const BUTTON_CLASSES = {
    google: "google",
    inverted: "inverted",
    normal: "normal",
}

const Button = ({ children, type = "button", classe }) => {

    return <button className={`${BUTTON_CLASSES[classe]}`} type={type}>{children}</button>
}

export default Button;