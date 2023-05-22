import React, { useState } from "react";

const GamertagForm = () => {
  const [gamertag, setGamertag] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gamertag }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gamertag:
        <input
          type="text"
          value={gamertag}
          onChange={(e) => setGamertag(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default GamertagForm;
