function InputField(props) {
    return (
        <div className="mb-3">
            {
                props.label &&
                <label className="form-label">{props.label}</label>
            }
            <input
                type={props.type || "text"}
                placeholder={props.placeholder}
                className="form-control"
            />
        </div>
    );
};

export default InputField;