async function quickLogin(selectedUser) {
    const side = (selectedUser === 'tathanad') ? 'left' : 'right';
    const errorElement = document.getElementById(`error-${side}`);
    const redirectUrl = `${selectedUser}/index.html`; 

    try {
        const response = await fetch('auteur');
        if (!response.ok) throw new Error("Cannot read auteur file");
        
        const text = await response.text();
        const validUsers = text.split('\n').map(u => u.trim());

        if (validUsers.includes(selectedUser)) {
            
            errorElement.style.color = "#2ecc71";
            errorElement.innerText = "Redirecting...";
            
            setTimeout(() => {
                window.location.href = redirectUrl; 
            }, 500);
            
        } else {
            errorElement.style.color = "red";
            errorElement.innerText = "Error: User not found in auteur!";
        }

    } catch (error) {
        console.error(error);
        errorElement.innerText = "System Error";
    }
}

function resetForm(side) {
    document.getElementById(`error-${side}`).innerText = "";
}