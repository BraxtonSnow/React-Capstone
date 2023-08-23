import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  function handleFormSubmit(e) {
    console.log(e);
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  return (
    <div className="page-container">
      <h3 className="contact-title-container">Contact Page</h3>
      <div className="contact-component-container">
        <div className="contact-modal-container">
          <h1>Contact Info</h1>
          <div className="modal-content-container">
            <div className="label-name-container">
              <h3>First Name:</h3>
              <h3>Last Name:</h3>
              <h3>Email:</h3>
            </div>
            <form
              className="contact-inputs-container"
              onSubmit={handleFormSubmit}
            >
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="submit-input" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
