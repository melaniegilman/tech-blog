let currSeconds = 0;    
let timer = setInterval(myTimer, 1000);

// sets currSeconds back to 0
function resetTimer() {
    currSeconds = 0;
};

// adds 1 to currSeconds each second and logs the user out after 300 seconds (5 minutes)
async function myTimer() {
    currSeconds++;
    
    if (currSeconds === 300) {
        console.log("Logging Out!")
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        };
    };
};
// Declare the events that would reset the timer 
window.onload = resetTimer; 
window.onmousemove = resetTimer; 
window.onmousedown = resetTimer; 
window.ontouchstart = resetTimer; 
window.onclick = resetTimer; 
window.onkeypress = resetTimer; 