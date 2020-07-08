import React from 'react';
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
        <h1 color="white"> Apresentado por: André Vinicius </h1>
            <h2 color="white"> Ouça agora </h2>

            <a
          className="spotify"
          href="https://open.spotify.com/show/1LrOXnIWjlW6NikfnwmTdu"
          target="_blank"
          >
            Spotify
          </a>

          <a
          className="anchor"
          href="https://anchor.fm/andru00e9-vinu00edcius-sm/episodes/Introduo-do-Podcast-Vincius-Smith-egevs6"
          target="_blank"
          >
            Anchor
          </a>

          <a
          className="pocket"
          href="https://anchor.fm/andru00e9-vinu00edcius-sm/episodes/Introduo-do-Podcast-Vincius-Smith-egevs6"
          target="_blank"
          >
            Pocket
          </a>

            <h3 color="white"> Desenvolvido por Kevin Calheiros, 2020. </h3>
            </form>


    </section>
    <img src={platImg} alt="Vinicius Podcast"/>
</div>
  );
}

export default App;
