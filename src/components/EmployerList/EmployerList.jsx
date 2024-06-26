import { EmployerItem } from ".";

export const EmployerList = (props) => {
  const { data, toggleEmployerActive, delEmployer, editEmployerHandler, isEditActive, setIsEditActive } = props;
  console.log(data);

  return (
    <ul className="employer-list">
        {
          data.map((item, index) => (
            <EmployerItem
              key={ item.id }               
              item={ item } 
              index={ index }
              isEmployerActive={ item.active }              
              toggleEmployerActive={toggleEmployerActive} 
              delEmployer={ delEmployer }
              editEmployerHandler={ editEmployerHandler }
              isEditActive={ isEditActive }
              setIsEditActive={ setIsEditActive }
            />
          ))
        }
      </ul>
  );
};
