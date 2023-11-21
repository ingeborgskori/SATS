async function fetchSessions() {
    try {
        const response = await fetch('response.json');
        const data = await response.json();
        return data.results;
    } catch {
        throw new Error('Could not load training sessionList ' + error.message);
    }
}

function displaySessions(trainingSessions) {
    const sessionList = document.getElementById('sessionList');
    sessionList.innerHTML = '';

    trainingSessions.forEach((session, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${session.name}, Instructur: ${session.instructor}, Duration: ${session.durationInMinutes} minutes`;
        sessionList.appendChild(listItem);
    })
}

fetchSessions()
.then((sessionList) => displaySessions(sessionList))
.catch((error) => {
    console.log('Error fetching sessionList ', error);
});