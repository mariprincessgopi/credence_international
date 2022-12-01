import { styles } from "../../assets/css/styles";
import ErrorMessage from "../../component/errorMessage";

export default function Input(props) {
    const { iconName, fieldValue, label,
        onChange, errorMessage, placeholderText,
        inputId, inputType } = props;

    return (
        <>
            {
                label ?
                    <label className='form-label'>{label}</label>
                    : null
            }
            <div className='input-group mb-3'>
                {
                    iconName ?
                        <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                            <i className={iconName} style={styles.whiteText} aria-hidden='true' />
                        </span>
                        : null
                }
                <input
                    type={inputType || 'text'}
                    className='form-control'
                    placeholder={placeholderText}
                    id={inputId}
                    value={fieldValue}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <ErrorMessage errors={errorMessage} />
        </>
    )
}
