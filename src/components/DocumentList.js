import DocumentListItem from "./DocumentListItem";

function DocumentList(props) {

  const documentList = props.documentList;
  const listItems = documentList.map((item) =>
    <DocumentListItem key={item.id.toString()} name={item.name} editedDate={item.editedDate}/>
  );

  return (
    <ul className="doclist">
      {listItems}
    </ul>
  );
}

export default DocumentList;