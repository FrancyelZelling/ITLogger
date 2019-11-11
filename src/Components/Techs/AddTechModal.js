import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      console.log(firstName, lastName);

      //Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technicial</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="first"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="first" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="last"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="last" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn waves-light"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
