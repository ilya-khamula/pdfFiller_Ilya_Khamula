import './scss/main.scss';
import {useMemo, useState} from "react";
import DocumentList from "./components/DocumentList";

function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const appClassName = useMemo(() => {
    return `app${isMobile ? ' app-mobile' : ''}`;
  }, [isMobile]);

  window.addEventListener('resize', () => {
    setMobile(window.innerWidth < 768);
  });

  const documentList = [
    {
      id: 0,
      name: 'Rundofase',
      editedDate: '08/08/2020',
    },
    {
      id: 1,
      name: 'Genco Pura Olive Oil Company',
      editedDate: '08/08/2020',
    },
    {
      id: 2,
      name: 'Bubba Gump',
      editedDate: '08/08/2020',
    }
  ];

  return (
    <div className={appClassName}>
      <DocumentList documentList={documentList}/>
    </div>
  );
}

export default App;