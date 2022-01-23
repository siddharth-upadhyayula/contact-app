import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      "name":"Sid",
      "email":"upadhyayula@gmail.com"
    },
    {
      id: "2",
      "name":"Swathi",
      "email":"upadhyayula1@gmail.com"
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
