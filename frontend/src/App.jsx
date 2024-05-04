import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);
  
  function handleContactClick(contact) {
    setContact(contact);
  }

  async function fetchContacts() {
    const response = await fetch("http://localhost:3000/api/contacts");
    const newContacts = await response.json();
    setContacts(newContacts);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <div className={styles.container}>

        <Sidebar contacts={contacts} onContactClicked={handleContactClick} />
        {contact != null ? <ContactDisplay null contact={contact} /> : undefined}
      </div>
    </>
  );
}
