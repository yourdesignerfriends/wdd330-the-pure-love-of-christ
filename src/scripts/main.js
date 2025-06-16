import { loadHeader, loadFooter, loadNav } from './utils.mjs';
import { initHamburgerMenu } from './hamburgerMenu.js';
import { initDarkMode } from './darkMode.js';
import ExternalServices from './externalServices.mjs';

const services = new ExternalServices();

async function loadQuoteOfTheDay() {
  try {
    const quote = await services.getQuoteOfTheDay();
    document.getElementById('verse').textContent = quote.body;
    document.getElementById('reference').textContent = `— ${quote.author}`;
  } catch (error) {
    document.getElementById('verse').textContent = "No se pudo cargar la cita.";
    document.getElementById('reference').textContent = "";
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadHeader();
  await loadNav();
  initHamburgerMenu();
  loadFooter();
  initDarkMode();
  loadQuoteOfTheDay();
});

