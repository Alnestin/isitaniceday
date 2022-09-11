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
      });

      // Update value in database.
      set(dbref, value);
    } else {
      // Get current value
      onValue(dbref, (snapshot) => {
        value = parseInt(snapshot.val()) + 1;
      });

      // Update value in database
      set(dbref, value);
    }
  }

  return (
    <Container>
        <Button variant='contained' onClick={() => sendInfo('Like')}>Like</Button>
        <Button variant='contained' onClick={() => sendInfo('Dislike')}>Dislike</Button>
    </Container>
  );
}