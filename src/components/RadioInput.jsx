function RadioInput({ text, name, handleClick, value, selected }) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        className="mr-1"
        value={value}
        checked={value === selected}
        onChange={(e) => handleClick(e)}
      />
      <span>{text}</span>
    </label>
  );
}

export default RadioInput;
