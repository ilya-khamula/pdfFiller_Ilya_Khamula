function Button(props) {
  const className = `btn btn-${props.color}`

  return (
    <button className={className} type="button">
      {props.text}
    </button>
  );
}

export default Button;