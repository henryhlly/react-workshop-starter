import style from "./Sidebar.module.css";
import ContactCard from "./ContactCard.jsx";
import { useState } from "react";

export default function Sidebar({ contacts, onContactClicked }) {

    const [searchTerm, setSearchTerm] = useState("");

    function searchFilter(contact) {
        return (contact.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <nav className={style.sidebar}>
            <div className={style.corner}>
                <h2>Friends</h2>
                <input type="text" className={style.searchbar} value={searchTerm} onChange={handleChange} />
            </div>
            <div className={style.contactList}>
                {contacts.filter(searchFilter).map((contact) => (

                    <ContactCard key={contact._id} contact={contact} onContactClicked={onContactClicked} />

                ) )}
            </div>
        </nav>
    );
}