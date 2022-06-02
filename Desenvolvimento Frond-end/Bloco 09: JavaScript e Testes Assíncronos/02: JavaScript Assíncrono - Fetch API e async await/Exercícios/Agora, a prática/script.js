// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function createP (joke) {
  const jokeContainer = document.getElementById('jokeContainer');
  const createP = document.createElement('p');
  createP.innerText = joke;
  jokeContainer.appendChild(createP);
}

const fetchJoke = async () => {
  try { 
    const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
    }
    const response = await fetch(API_URL, myObject)
    const data = await response.json()
    createP(data.joke)
  } catch (error) {
    console.log(`Deu erro x_x \n${error}`);
  }
};

window.onload = () => fetchJoke();