let currentChallenge = null;

async function loadCharityChallenge() {
  try {
    const response = await fetch('/.netlify/functions/bored');
    const data = await response.json();
    if (data && data.length > 0) {
      currentChallenge = data[Math.floor(Math.random() * data.length)];
      document.getElementById('challenge').textContent = currentChallenge.activity;
      document.getElementById('accept-challenge').style.display = '';
      document.getElementById('reject-challenge').style.display = '';
      document.getElementById('new-challenge').style.display = 'none';
    } else {
      document.getElementById('challenge').textContent = "No charity challenges found.";
    }
  } catch (error) {
    document.getElementById('challenge').textContent = "Could not load a challenge.";
  }
}

function acceptChallenge() {
  let savedChallenges = JSON.parse(localStorage.getItem('myChallenges')) || [];
  // Evita duplicados por key
  if (!savedChallenges.some(ch => ch.key === currentChallenge.key)) {
    savedChallenges.push({
      ...currentChallenge,
      acceptedAt: new Date().toISOString(),
      reflection: ""
    });
    localStorage.setItem('myChallenges', JSON.stringify(savedChallenges));
  }
  document.getElementById('challenge').textContent = "Great! Enjoy your challenge: " + currentChallenge.activity;
  document.getElementById('accept-challenge').style.display = 'none';
  document.getElementById('reject-challenge').style.display = 'none';
  document.getElementById('new-challenge').style.display = '';
}

function rejectChallenge() {
  loadCharityChallenge();
}

document.addEventListener('DOMContentLoaded', () => {
  loadCharityChallenge();
  document.getElementById('accept-challenge').addEventListener('click', acceptChallenge);
  document.getElementById('reject-challenge').addEventListener('click', rejectChallenge);
  document.getElementById('new-challenge').addEventListener('click', loadCharityChallenge);
});