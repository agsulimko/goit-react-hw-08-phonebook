import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import Button from "@mui/material/Button";
import { deleteContacts } from "redux/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));

  //  console.log(contact.id);
  return (
    <li className={css.item}>
      <div className={css.name}>
        <h3>{contact.name}</h3>
        <h3>{contact.number}</h3>
      </div>

      <Button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
        sx={{ m: 1, width: "50px" }}
      >
        Delete
      </Button>
    </li>
  );
};
export default Contact;
