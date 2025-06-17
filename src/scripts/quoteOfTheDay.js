import ExternalServices from './externalServices.mjs';

const services = new ExternalServices();

async function loadQuoteOfTheDay() {
  const verseEl = document.getElementById('verse');
  const refEl = document.getElementById('reference');
  if (!verseEl || !refEl) return;
  try {
    const quote = await services.getQuoteOfTheDay();
    verseEl.textContent = quote.body;
    refEl.textContent = `— ${quote.author}`;
  } catch (error) {
    verseEl.textContent = "The quote could not be loaded";
    refEl.textContent = "";
  }
}

document.addEventListener('DOMContentLoaded', loadQuoteOfTheDay);