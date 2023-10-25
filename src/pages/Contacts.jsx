import ContactForm from "components/FormContact/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import css from "./Contacts.module.css";
import Loader from "components/Loader/Loader";
import { selectLoading } from "redux/contacts/selectors";
import { useSelector } from "react-redux";

const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <main>
      <h1 className={css.h1}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {/* {/* {isLoading && <b>Loading contacts...</b>} */}
      {isLoading && <b>{Loader()}</b>}
      {/* {error && <b>{Loader()}</b>} */}
      <ContactList />
    </main>
  );
};
export default Contacts;
