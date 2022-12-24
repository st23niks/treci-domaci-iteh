function InputField(props) {
    return (
        <div className="mb-3">
            {
                props.label &&
                <label className="form-label">{props.label}</label>
            }
            <input
                onChange={props.onChange}                
                type={props.type || "text"}
                placeholder={props.placeholder}
                step={props.step}
                className="form-control"
            />
        </div>
    );
};

export default InputField;