function loadMyChallenges() {
    const container = document.getElementById('my-challenges-list');
    const challenges = (JSON.parse(localStorage.getItem('myChallenges')) || []).slice().reverse();
    if (challenges.length === 0) {
        container.innerHTML = "<p>No challenges saved yet.</p>";
        return;
    }
    container.innerHTML = challenges.map((ch, idx) => `
        <div class="saved-challenge" style="margin-bottom:2rem; padding:1rem; border:1px solid #eee; border-radius:8px;">
            <strong>${ch.activity}</strong><br>
            <small>Accepted: ${new Date(ch.acceptedAt).toLocaleString()}</small><br>
            <textarea placeholder="Write your reflection..." data-idx="${idx}" style="width:100%;min-height:60px;margin-top:0.5rem;">${ch.reflection || ""}</textarea>
            <div style="margin-top:0.5rem;">
                <button class="save-reflection" data-idx="${idx}">Save</button>
                <button class="discard-reflection" data-idx="${idx}">Discard</button>
                <button class="delete-challenge" data-idx="${idx}">Delete</button>
            </div>
        </div>
    `).join("");

    // Save and discard
    container.querySelectorAll('.save-reflection').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.dataset.idx;
            const textarea = container.querySelector(`textarea[data-idx="${idx}"]`);
            challenges[idx].reflection = textarea.value;
            localStorage.setItem('myChallenges', JSON.stringify(challenges));
            textarea.style.background = "#e6ffe6";
            setTimeout(() => textarea.style.background = "", 800);
        });
    });
    container.querySelectorAll('.discard-reflection').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.dataset.idx;
            const textarea = container.querySelector(`textarea[data-idx="${idx}"]`);
            textarea.value = challenges[idx].reflection || "";
            textarea.style.background = "#ffe6e6";
            setTimeout(() => textarea.style.background = "", 800);
        });
    });
    // Delete logic
    container.querySelectorAll('.delete-challenge').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.dataset.idx;
            if (confirm("Are you sure you want to delete this challenge?")) {
                challenges.splice(idx, 1);
                localStorage.setItem('myChallenges', JSON.stringify(challenges));
                loadMyChallenges();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', loadMyChallenges);