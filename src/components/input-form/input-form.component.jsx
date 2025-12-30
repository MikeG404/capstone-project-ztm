const InputForm = ({label, ...otherProps}) => {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input required name={name} {...otherProps} />
        </div>
    )
}

export default InputForm;