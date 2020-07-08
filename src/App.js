import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global/global.css'

import logoImg from './logo256.png'
import platImg from './plat1.jpeg';

function App() {
  return (
    <div className="logon-container">
    <section className="form">
    <img src={logoImg} alt="Logo"/>
        <form>
        <h3 color="white"> Apresentado por: André Vinicius </h3>
            <h1 color="white"> Ouça agora </h1>

            <a
          className="button-spotify"
          href="https://open.spotify.com/show/1LrOXnIWjlW6NikfnwmTdu"
          target="_blank"
          >
            Spotify
          </a>

          <b
          className="button-anchor"
          href="https://hltv.org/"
          target="_blank"
          >
            Anchor
          </b>

          <c
          className="button-pocket"
          href="https://open.spotify.com/show/1LrOXnIWjlW6NikfnwmTdu"
          target="_blank"
          >
            Pocket
          </c>

            <h2 color="white"> Desenvolvido por Kevin Calheiros, 2020. </h2>

        </form>
    </section>
    <img src={platImg} alt="Vinicius Podcast"/>
</div>
  );
}

export default App;
