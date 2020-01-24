const AWS = require("aws-sdk");

function component() {
  const element = document.createElement("div");

  element.innerHTML = `Hello from AWS.VERSION ${AWS.VERSION}!`;

  return element;
}

document.body.appendChild(component());
