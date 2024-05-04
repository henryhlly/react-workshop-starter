import style from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {
    
    return(
        <main className={style.container}>
            <img src={contact.photoUrl} alt={contact.name} height="200" width="200" alpha="50"></img>
            <h1>{contact.name}</h1>
            <h3>{contact.phoneNumber}</h3>
            <p>{contact.funFact}</p>
        </main>
    );
}