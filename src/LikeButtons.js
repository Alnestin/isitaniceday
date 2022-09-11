import React from "react";
import { Button, Container } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

export default function LikeButtons(props) {

  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);
  if (!props.temp) {
    return null;
  }

  function sendInfo(data) {
    let value = 0;
    const dbref = ref(db, data + '/');
    if (data === "Like") {
      // Get current value
      onValue(dbref, (snapshot) => {
        value = parseInt(snapshot.val()) + 1;
        setLikes(value);
      });

      // Update value in database.
      set(dbref, value);
    } else {
      // Get current value
      onValue(dbref, (snapshot) => {
        value = parseInt(snapshot.val()) + 1;
        setDislikes(value);
      });

      // Update value in database
      set(dbref, value);
    }
  }

  return (
    <Container>
        <Button variant='contained' onClick={() => sendInfo('Like')}>Like ({likes})</Button>
        <Button variant='contained' onClick={() => sendInfo('Dislike')}>Dislike ({dislikes})</Button>
    </Container>
  );
}