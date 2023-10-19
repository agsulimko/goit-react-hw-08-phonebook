import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import css from "./Home.module.css";
const Contacts = () => {
  return (
    <main>
      <h1 className={css.h1}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {/* {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>} */}
      <ContactList />
    </main>
  );
};
export default Contacts;
