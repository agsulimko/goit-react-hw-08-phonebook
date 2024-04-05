import css from "./Home.module.css";
const Contacts = () => {
  return (
    <section className={css.sectionContacts}>
      <div className={css.url}></div>
      <h1 className={css.h1}>Phonebook</h1>
      <p className={css.p}>
        PhoneBook app is an easy to use contact manager app that gives you
        facility of saving and viewing your contacts, so that you never lose
        your contacts. Try it today!
      </p>
    </section>
    // </main>
  );
};
export default Contacts;
