import { styles } from "../assets/css/styles";

export default function ErrorMessage(props) {
    return (
        props.errors ?
            <h6 style={styles.errorText}>
                {props.errors}
            </h6>
            : null
    )
}