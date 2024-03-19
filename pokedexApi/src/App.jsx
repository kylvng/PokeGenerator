import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const fetchRandomPokemon = async () => {
    try {
      let randomId;
      do {
        randomId = Math.floor(Math.random() * 493) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon!');
        }
        const pokeData = await response.json();
        const banned = bannedAttributes.some(attr => {
          return pokeData.types.some(type => type.type.name === attr);
        });
        if (!banned) {
          setPokemon({
            ...pokeData,
            heightFeet: ((pokeData.height / 10) * 3.281).toFixed(1),
            weightLbs: ((pokeData.weight / 10) * 2.205).toFixed(1),
          });
          break;
        }
      } while (true);
    } catch (error) {
      console.error('Error fetching random Pokemon:', error);
    }
  };

  const handleFetchPokemon = () => {
    fetchRandomPokemon();
  };

  const handleBanAttribute = (attribute) => {
    setBannedAttributes([...bannedAttributes, attribute]);
  };

  const handleUnbanAttribute = (attribute) => {
    setBannedAttributes(bannedAttributes.filter(attr => attr !== attribute));
  };

  const renderAttributes = () => {
    if (pokemon) {
      const type = pokemon?.types.slice(0, 2).map(type => type.type.name).join(', ');
      const weight = pokemon?.weightLbs;
      const height = pokemon?.heightFeet;
      const abilities = pokemon.abilities.slice(0, 3).map(ability => ability.ability.name).join(', ');
      return (
        <div>
          <button onClick={() => handleBanAttribute(type)}>{type}</button>
          <button onClick={() => handleBanAttribute(abilities)}>{abilities}</button>
          <button onClick={() => handleBanAttribute(height + ' ft')}>{height} ft</button>
          <button onClick={() => handleBanAttribute(weight + ' lbs')}>{weight} lbs</button>
        </div>
      );
    }
  };

  return (
    <div className='whole-page'>
      <div className='poke-container'>
      <h1>🦄PokéGenerator🎱</h1>
      <h3 style={{ marginBottom: '-15px' }}>Discover New Pokemon By Pressing the Button Below!</h3>
      <h4 style={{ fontFamily: 'Verdana, sans-serif', fontStyle: 'italic' }}>It's like a Pokédex, but you have no control over what you'll find... </h4>
      {pokemon && (
          <div className='fetch-zone'>
          <div className='attribute-row'>
            {renderAttributes()}
          </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          </div>
      )}
      <button onClick={handleFetchPokemon}>🔀 Fetch Random Pokemon 👾</button>
      </div>

      <div className='banList'>
        <h1>⛔Banned Attributes🚫:</h1>
        <h3>Select an attribute in your listing to ban it</h3>
        <div>
          {bannedAttributes.map((attr, index) => (
            <button key={index} onClick={() => handleUnbanAttribute(attr)}>{attr}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
