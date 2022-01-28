import React from 'react';
import {useSelector} from "react-redux";
import Contact from './Contact';
;

const Contacts = () => {
    const contacts=useSelector((state)=>state.contacts.contacts);
  return <div>
      <table className="table   table-shadow">
  
  <thead className="bg-danger text-white">
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox">
              <input type="checkbox"
              className="custom-control-input"/>
              <label className="custom-control-lebel"></label>
          </div>
      </th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope ="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          contacts.map((contact)=>(<Contact contact={contact} key={contact.id}/>))
      }
    
    
  </tbody>
</table>
  </div>;
};

export default Contacts;
