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
    const sessionsList = document.getElementById('sessionList'); 
    sessionsList.innerHTML = ''; 
  
    const table = document.createElement('table');
    table.classList.add('session-table');
  

    const headerRow = table.insertRow();
    const headers = ['Name', 'Instructur', 'Duration (minutes)', 'Club name', 'Start time'];
    headers.forEach(headerText => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
  
    trainingSessions.forEach(session => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3)
      const cell5 = row.insertCell(4);

  
      cell1.textContent = session.name;
      cell2.textContent = session.instructor;
      cell3.textContent = session.durationInMinutes;
      cell4.textContent = session.clubName;

      const startTime = new Date(session.zonedStartTime.dateTime);
      cell5.textContent = startTime.toLocaleString(); 
  });
  
    sessionsList.appendChild(table);
  }
  

fetchSessions()
.then((sessionList) => displaySessions(sessionList))
.catch((error) => {
    console.log('Error fetching sessionList ', error);
});