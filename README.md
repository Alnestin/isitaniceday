# isitaniceday

This project was created to check how many nice days atlanta has according to the people that visit our site.

## Usage

This react app was created using multiple technologies. Firstly, it uses the weather api in order to check the weather currently in Atlanta. 
Secondly, we used firebase Realtime Database to store the likes and dislikes of each day.

## Customization

If you wish to use this repository for your own application, you will need to add your own firebase credentials to use with the database.
You will have to create a `firebase.js` file with the firebase config and export it so that the `LikeButtons.js` file can import it and use it to access the database.
The config variable will look something like this

```
export const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projecttId",
  storageBucket: "storageBucker",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "mesasurementId"
};
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

