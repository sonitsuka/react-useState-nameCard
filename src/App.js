import "./styles.css";
import React from "react";
import profPicture from "./neco_profile.png";

export default function App() {
  // set default state
  const [contact, setContact] = React.useState({
    firstName: "Shiho",
    lastName: "Onitsuka",
    phone: "+49 (03) xxx-xxxx",
    email: "info@sonitsuka.com",
    isFavorite: false
  });

  // be able to update the state object
  let starIcon = contact.isFavorite ? "★" : "☆";

  function toggleFavorite() {
    // call back function
    setContact((prevContact) => ({
      // all other infromation is same. only changed isFavorite
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }));
  }
  return (
    <main>
      <article className="card">
        <img src={profPicture} className="card--image" alt="profile img" />
        <div className="card--info">
          <span className="card--favorite" onClick={toggleFavorite}>
            Click☆ if you like img → {starIcon}
          </span>
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
