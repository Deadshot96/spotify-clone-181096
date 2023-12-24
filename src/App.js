import "./App.css";
import { useState, useEffect } from "react";
import Login from "./login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((data) => console.log(data))
        .catch((e) => console.error(e));
    }
  }, []);

  return <div className="App">{token ? <h1>Player</h1> : <Login />}</div>;
}

export default App;
