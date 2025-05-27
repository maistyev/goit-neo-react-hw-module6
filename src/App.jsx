import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/filtersSlice";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchTerm = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox handleFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
