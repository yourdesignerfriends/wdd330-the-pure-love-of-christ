import { loadHeader, loadFooter, loadNav } from './utils.mjs';
import { initHamburgerMenu } from './hamburgerMenu.js';
import { initDarkMode } from './darkMode.js';

document.addEventListener('DOMContentLoaded', async () => {
  await loadHeader();
  await loadNav();
  initHamburgerMenu();
  loadFooter();
  initDarkMode();
});