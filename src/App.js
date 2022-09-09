import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import LikeButtons from './LikeButtons';

const cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '30vw'
}

export default function App() {
  const [temp, setTemp] = React.useState(null);

  function getWeather() {
    const baseURL = 'https://api.weather.gov/gridpoints/TOP/50,86/forecast';
    axios.get(baseURL).then((response) => {
      setTemp(response.data.properties.periods[0].temperature + "°");
    }).catch((r) => console.log(r) );
  }

  // function requestDecision() {}
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
      <CardActions>
          <Container>
            <Box>
              <Stack spacing={1}>
                <Button variant='contained' onClick={getWeather}>
                  Get Weather
                </Button>
                <LikeButtons temp={temp}></LikeButtons>
              </Stack>
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