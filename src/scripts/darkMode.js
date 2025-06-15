export function initDarkMode() {
    const modeButton = document.querySelector("#darkBtn");

    modeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeButton.src = "/images/light-mode.svg";
            modeButton.alt = "Switch to light mode";
            modeButton.setAttribute("aria-label", "Activate light mode");

            const headerLogo = document.querySelector('header img');
            headerLogo.src = "/images/logo-dark.webp";
            headerLogo.alt = "Logo in dark mode";
            headerLogo.width = 100;
            headerLogo.height = 84;

            document.querySelector('[aria-label="facebook"] img').src = "/images/facebook-dark.svg";
            document.querySelector('[aria-label="facebook"] img').alt = "Facebook in dark mode";
            document.querySelector('[aria-label="facebook"] img').width = 200;
            document.querySelector('[aria-label="facebook"] img').height = 200;

            document.querySelector('[aria-label="instagram"] img').src = "/images/instagram-dark.svg";
            document.querySelector('[aria-label="instagram"] img').alt = "Instagram in dark mode";
            document.querySelector('[aria-label="instagram"] img').width = 200;
            document.querySelector('[aria-label="instagram"] img').height = 200;

            document.querySelector('[aria-label="youtube"] img').src = "/images/youtube-dark.svg";
            document.querySelector('[aria-label="youtube"] img').alt = "YouTube in dark mode";
            document.querySelector('[aria-label="youtube"] img').width = 200;
            document.querySelector('[aria-label="youtube"] img').height = 200;
        } else {
            modeButton.src = "/images/dark-mode.svg";
            modeButton.alt = "Switch to dark mode";
            modeButton.setAttribute("aria-label", "Activate dark mode");

            const headerLogo = document.querySelector('header img');
            headerLogo.src = "/images/logo.webp";
            headerLogo.alt = "Logo";
            headerLogo.width = 300;
            headerLogo.height = 300;

            document.querySelector('[aria-label="facebook"] img').src = "/images/facebook.svg";
            document.querySelector('[aria-label="facebook"] img').alt = "Facebook";
            document.querySelector('[aria-label="facebook"] img').width = 200;
            document.querySelector('[aria-label="facebook"] img').height = 200;

            document.querySelector('[aria-label="instagram"] img').src = "/images/instagram.svg";
            document.querySelector('[aria-label="instagram"] img').alt = "Instagram";
            document.querySelector('[aria-label="instagram"] img').width = 200;
            document.querySelector('[aria-label="instagram"] img').height = 200;

            document.querySelector('[aria-label="youtube"] img').src = "/images/youtube.svg";
            document.querySelector('[aria-label="youtube"] img').alt = "YouTube";
            document.querySelector('[aria-label="youtube"] img').width = 200;
            document.querySelector('[aria-label="youtube"] img').height = 200;
        }
    });
}