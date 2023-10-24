import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import Button from "@mui/material/Button";
import { deleteContacts } from "redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));

  //  console.log(contact.id);
  return (
    <li className={css.item}>
      <div className={css.nameNumber}>
        <h3 className={css.name}>{contact.name}</h3>
        <h3 className={css.number}>{contact.number}</h3>
      </div>

      <Button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
        sx={{ m: 1, width: "110px" }}
      >
        Delete
      </Button>
    </li>
  );
};
export default Contact;
