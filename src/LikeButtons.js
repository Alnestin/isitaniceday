import React from "react";
import { Button, Container } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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
    const dbref = ref(db, data + '/');
    if (data === "Like") {
      // Get current value
      let new_val = likes + 1
      setLikes(new_val);
      set(dbref, new_val);
    } else {
      // Get current value
      let new_val = dislikes + 1;
      setDislikes(new_val);
      set(dbref, new_val);
    }
  }

  return (
    <Container>
        <Button variant='contained' onClick={() => sendInfo('Like')}>Like ({likes})</Button>
        <Button variant='contained' onClick={() => sendInfo('Dislike')}>Dislike ({dislikes})</Button>
    </Container>
  );
}