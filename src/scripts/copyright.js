document.addEventListener('DOMContentLoaded', () => { 
    const currentYear = new Date().getFullYear(); 
    const site = "The Pure Love of Christ";

    const copyrightElement = document.getElementById("copyright"); 
    
    if (copyrightElement) { 
        copyrightElement.textContent = `\u00A9 ${currentYear} ${site}. All rights reserved.`; 
        } 
});