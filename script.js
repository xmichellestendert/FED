// Selecteer het input-element waar de gebruiker de e-mail invoert
const input = document.querySelector(".alpha main section:nth-of-type(2) label input");

// Selecteer het element dat de character counter weergeeft
const counter = document.querySelector("span.field_counter");

// Haal de maximale lengte van het input-veld op (via het 'maxlength' attribuut)
const maxLength = input.getAttribute("maxlength");

// Toon de initiële waarde van de counter, gelijk aan de maximale toegestane karakters
counter.innerText = maxLength;

// Voeg een event listener toe die elke keer wordt geactiveerd wanneer de gebruiker tekst invoert
input.addEventListener("input", (event) => {
  // Haal de huidige lengte van de ingevoerde tekst op
  const valueLength = event.target.value.length;
  
  // Bereken hoeveel karakters de gebruiker nog over heeft
  const charLeftLength = maxLength - valueLength;

  // Als het aantal resterende karakters minder dan 0 is, stop dan met uitvoeren
  if (charLeftLength < 0) return;

  // Werk de karakterteller bij met het nieuwe aantal resterende karakters
  counter.innerText = charLeftLength;
});
