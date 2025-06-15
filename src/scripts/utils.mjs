export function setCopyright(siteName = "The Pure Love of Christ") {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById("copyright");
  if (copyrightElement) {
    copyrightElement.textContent = `\u00A9 ${currentYear} ${siteName}. All rights reserved.`;
  }
}

export async function loadFooter() {
  const response = await fetch('/partials/footer.html');
  const html = await response.text();
  document.getElementById('footer').innerHTML = html;
  setCopyright();
}

export async function loadHeader() {
  const response = await fetch('/partials/header.html');
  const html = await response.text();
  document.getElementById('header').innerHTML = html;
}

export async function loadNav() {
  const response = await fetch('/partials/nav.html');
  const html = await response.text();
  document.getElementById('nav').innerHTML = html;
}