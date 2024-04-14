import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { EmployerList } from "./components/EmployerList";
import { EditForm } from "./components/EditForm";

const App = () => {

  const [empList, setEmpList] = useState([
    {id: 1, name: 'Ivan', surname: 'Ivanov', active: true},
    {id: 2, name: 'Petro', surname: 'Petrov', active: true},
    {id: 3, name: 'Mikola', surname: 'Mikolov', active: true},
    {id: 4, name: 'Taras', surname: 'Tarasov', active: true},
  ]);

  const [editEmployerItem, setEditEmployerItem] = useState('');
  const [editEmployerIndex, setEditEmployerIndex] = useState('');  
  const [isEditActive, setIsEditActive] = useState(false);


  const toggleEmployerActive = (employerActiveId) => {
    console.log(employerActiveId);
    let index = empList.findIndex(elem => elem.id == employerActiveId);
    console.log(index);
    let newList = empList.map(item => item);
    newList[index].active = newList[index].active ? false : true;
    setEmpList(newList);
    console.log(empList);
  }
  
  const addEmployer = (employer) => {
    employer.id = (empList.length + 1);
    setEmpList([...empList, employer]);
  }

  const delEmployer = (employerId) => {
    console.log(employerId);
    setEmpList(empList => empList.filter(item => item.id != employerId));
  }

  const editEmployerHandler = (employerId) => {
    console.log(employerId);
    let index = empList.findIndex(elem => elem.id == employerId);
    console.log(index);
    setEditEmployerItem(empList[index]);
    setEditEmployerIndex(index); 
  }

  const editEmployer = (editEmpItem) => {
    console.log(editEmpItem); 
    
    let newList = empList.map(item => item);
    newList[editEmployerIndex].name = editEmpItem.editName;
    newList[editEmployerIndex].surname = editEmpItem.editSurname;
    console.log(newList);

    setEmpList(newList);
    setIsEditActive(false); 
  }

  return (
    <div className="container">
      <h1>Employer list app</h1>

      <div className="employer-list-app">

        <AddForm addEmployer={ addEmployer } isEditActive={ isEditActive } />

        { isEditActive && <EditForm 
            editEmployerName={ editEmployerItem.name } 
            editEmployerSurname={ editEmployerItem.surname } 
            editEmployer={ editEmployer } 
            setIsEditActive={setIsEditActive}
        />}

        <div className="employer-list-block">

          <p className="employer-list-count">
            Employers count: <span>{ empList.length }</span>
          </p>

          <EmployerList 
              data={ empList } 
              toggleEmployerActive={toggleEmployerActive}
              delEmployer={ delEmployer } 
              editEmployerHandler={ editEmployerHandler }
              isEditActive={ isEditActive }
              setIsEditActive={ setIsEditActive }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
