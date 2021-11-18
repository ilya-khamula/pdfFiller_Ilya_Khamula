import Button from "./Button";
import icon from "../icons/document-list-icon.svg";

function DocumentListItem(props) {
  return (
    <li className="doclist__item">
      <div className="doclist__name-block">
        <img className="doclist__icon" src={icon} alt={props.name}/>
        <div className="doclist__text-block">
          <h3 className="doclist__name">{props.name}</h3>
          <p className="doclist__edited">Last Edited: {props.editedDate}</p>
        </div>
      </div>
      <Button text="View document" color="orange"/>
      {/*<Button text="View document" color="orange disabled"/>*/}
      {/*<Button text="View document" color="gray"/>*/}
      {/*<Button text="View document" color="gray disabled"/>*/}
    </li>
  );
}

export default DocumentListItem;