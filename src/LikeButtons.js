import React from "react";
import { Button, Container } from "@mui/material";

export default function LikeButtons(props) {
  if (!props.temp) {
    return null;
  }

  function sendInfo(data) {
    // TODO: Send data to database and add counter to app.
    console.log(data)
  }
  return (
    <Container>
        <Button variant='contained' onClick={() => sendInfo('Like')}>Like</Button>
        <Button variant='contained' onClick={() => sendInfo('Dislike')}>Dislike</Button>
    </Container>
  );
}