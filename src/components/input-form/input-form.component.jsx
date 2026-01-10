import { FormInput, FormInputLabel, Group } from './input-form.styles';

const InputForm = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInput {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default InputForm;