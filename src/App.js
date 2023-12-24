import "./App.css";
import { useEffect } from "react";
import Login from "./login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) =>
          dispatch({
            type: "SET_USER",
            user,
          })
        )
        .catch((e) => console.error(e));
    }
    console.log("This is the user: ", user);
  }, [dispatch, user]);

  console.log("User: ", user);
  console.log("Token: ", token);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
