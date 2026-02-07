async function quickLogin(selectedUser) {
    const side = (selectedUser === 'tathanad') ? 'left' : 'right';
    const errorElement = document.getElementById(`error-${side}`);
    
    const redirectUrl = `${selectedUser}/index.html`; 

    try {
        const response = await fetch('auteur');
        
        if (!response.ok) {
            errorElement.innerText = "System Error: Missing file";
            return; 
        }
        
        const text = await response.text();
        const validUsers = text.split('\n').map(u => u.trim());

        if (validUsers.includes(selectedUser)) {
            errorElement.style.color = "#2ecc71"; 
            errorElement.innerText = "Redirecting...";
            
            setTimeout(() => {
                window.location.href = redirectUrl; 
            }, 500);
            
        } else {
            errorElement.style.color = "#ff4757"; 
            errorElement.innerText = "Access Denied!";
        }

    } catch (error) {
        errorElement.innerText = "System Error";
    }
}