import "./FieldText.css"

const FieldText = (props) => {
  const onDigit = (event) => {
    props.toChange(event.target.value)
  }

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onDigit}
        required={props.required}
        placeholder={props.placeholder}
        type="text"
        name=""
        id=""
      />
    </div>
  )
}

export default FieldText
