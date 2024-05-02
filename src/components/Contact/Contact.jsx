import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import Button from "@mui/material/Button";
import { deleteContacts, editContacts } from "redux/contacts/operations";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
});

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const [name, setName] = useState(contacts.name || "");
  const [number, setNumber] = useState(contacts.number || "");

  const handlEdit = () => {
    setIsEditMode((prev) => !prev);
  };
  const handleDelete = () => {
    dispatch(deleteContacts(contacts?.id));
    toast.success("Successfully deleted a contact!", { duration: 1500 });
    closeMenu(); // Close the menu after deleting
  };

  useEffect(() => {
    if (!isEditMode && (name !== contacts.name || number !== contacts.number)) {
      dispatch(editContacts({ id: contacts.id, name, number }));
      toast.success("Successfully edit a contact!", { duration: 1500 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, name, number]);

  const handleInputChange = ({ target }) => {
    if (target.name === "editName") {
      setName(target.value);
    } else if (target.name === "editNumber") {
      setNumber(target.value);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <li className={css.item}>
      {!isEditMode ? (
        <div className={css.nameNumber}>
          <div className={css.nameAvatar}>
            <p> {contacts.name.slice(0, 1).toUpperCase()}</p>
          </div>
          <h3 className={css.name}>{contacts.name}</h3>
          <h3 className={css.number}>{contacts.number}</h3>
        </div>
      ) : (
        <div className={css.div_input}>
          <input
            onChange={handleInputChange}
            type="text"
            name="editName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            className={css.input}
          />
          <input
            onChange={handleInputChange}
            type="tel"
            name="editNumber"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={number}
            required
            className={css.input}
          />
        </div>
      )}
      <div className={css.div_button}>
        <Button
          onClick={handlEdit}
          type="button"
          variant="contained"
          aria-label="Save Edit"
          className={css.btnClose}
          // className={css.btnSaveEdit}
          sx={{
            m: 1,
            // width: "110px",
            margin: 0,
            backgroundColor: "rgb(103, 103, 238)",
            // padding: "8px 0",
            // marginBottom: "4px",
            textTransform: "capitalize",
            lineHeight: 1,
            "@media screen and (min-width: 768px)": {
              padding: "8px 16px", // задаем другие паддинги для ширины больше 768px
            },

            "@media screen and (min-width: 1440px)": {
              padding: "8px 40px",
            },
          }}
        >
          {isEditMode ? "Save" : "Edit"}
        </Button>

        <Button
          type="button"
          variant="contained"
          className={css.btnClose}
          aria-label="Menu"
          onClick={() => setIsMenuOpen(true)}
          sx={{
            m: 1,
            // width: "110px",
            margin: 0,
            backgroundColor: "rgb(103, 103, 238)",
            textTransform: "capitalize",
            lineHeight: 1,
            "@media screen and (min-width: 768px)": {
              padding: "8px 16px", // задаем другие паддинги для ширины больше 768px
            },
            "@media screen and (min-width: 1440px)": {
              padding: "8px 40px",
            },
            // padding: "8px 0",
          }}
        >
          Delete
        </Button>
        {/* Menu with delete and cancel buttons */}

        <ThemeProvider theme={theme}>
          {isMenuOpen && (
            <div className={css.menu}>
              <Button
                type="button"
                variant="contained"
                color="error"
                // className={css.btnDelete}

                className={css.btnClose}
                aria-label="Menu"
                onClick={handleDelete}
                sx={{
                  m: 1,
                  // width: "110px",
                  margin: 0,
                  backgroundColor: "rgb(238, 43, 43)",

                  textTransform: "capitalize",
                  lineHeight: 1,
                  "@media screen and (min-width: 768px)": {
                    padding: "8px 16px", // задаем другие паддинги для ширины больше 768px
                  },
                  "@media screen and (min-width: 1440px)": {
                    padding: "8px 40px",
                  },
                }}
              >
                Delete
              </Button>
              <Button
                type="button"
                variant="contained"
                color="success"
                // className={css.btnCancel}
                className={css.btnClose}
                onClick={closeMenu}
                sx={{
                  m: 1,

                  margin: 0,

                  backgroundColor: "rgb(21, 104, 8)",
                  textTransform: "capitalize",
                  lineHeight: 1,
                  "@media screen and (min-width: 768px)": {
                    padding: "8px 16px", // задаем другие паддинги для ширины больше 768px
                  },
                  "@media screen and (min-width: 1440px)": {
                    padding: "8px 40px",
                  },
                  // padding: "8px 0",
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </ThemeProvider>
      </div>
    </li>
  );
};
export default Contact;
