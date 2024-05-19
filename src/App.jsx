import { useState, useEffect } from "react";
import FormComponent from "./components/FormComponent";
import DisplayComponent from "./components/DisplayComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (value) => {
    setSubmittedValue(value);
  };

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <div>
      <h1>React App with Vite</h1>
      <FormComponent onSubmit={handleSubmit} />
      <DisplayComponent value={submittedValue} />
      <ButtonComponent />
    </div>
  );
}

export default App;
