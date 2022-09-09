import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';

const cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '30vw'
}

export default function App() {
  const [temp, setTemp] = React.useState("-");

  function getWeather() {
    setTemp("90°")
  }
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Weather
        </Typography>
        <Typography sx={{ fontSize: 40 }} variant="h5" component="div">
          Atlanta, GA.
        </Typography>
        <Typography sx={{ fontSize: 60 }} variant="h5" component="div" color="text.secondary">
          {temp}
        </Typography>
      </CardContent>
      <CardActions textAlign='center'>
          <Container>
            <Box>
              <Button variant='contained' onClick={getWeather}>
                Get Weather
              </Button>
            </Box>
          </Container>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="App">
      <header className="App-header">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" style={cardStyle}>{card}</Card>
      </Box>
      </header>
    </div>
  );
}