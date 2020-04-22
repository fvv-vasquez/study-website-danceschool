const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:8080/dance-types', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(dance => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h3 = document.createElement('h3');
      h3.textContent = dance.title;

      const p = document.createElement('p');
      dance.description = dance.description.substring(0, 800);
      p.textContent = `${dance.description}`;

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();