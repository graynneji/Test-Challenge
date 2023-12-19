/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForms } from "./contexts/userContexts";
import Selector from "./components/Selector";

const defaultFormFields = {
  name: "",
  selectedSector: "",
  agree: "",
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, selectedSector, agree } = formFields;
  const { sectors } = useForms();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(name, value);
  };
  return (
    <section>
      <p>
        Please enter your name and pick the Sectors you are currently involved
        in
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          {sectors && (
            <Selector
              sectors={sectors}
              value={selectedSector}
              name="selectSelector"
              onHandlechange={handleChange}
            />
          )}
        </div>
      </form>
    </section>
  );
}

export default App;
