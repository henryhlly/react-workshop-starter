import style from "./ContactCard.module.css";
export default function ContactCard({ contact, onContactClicked }) {

  function handleClick() {
    onContactClicked(contact);
  }

  return (
    <div className={style.card} onClick={handleClick}>
      <img src={contact.photoUrl} alt={contact.name} />
      <h2>{contact.name}</h2>
    </div>
  );
}