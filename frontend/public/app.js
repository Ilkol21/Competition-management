document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    const btn = event.target.closest('button'); // Берем саму кнопку
    if (!btn) return; // Если клик не по кнопке — выходим

    if (btn.id === 'addCompetitionBtn') {
      addCompetition().then(() => console.log("Соревнование добавлено!"));
    }
    if (btn.id === 'addParticipantBtn') {
      console.log("Клик по addParticipantBtn");
      addParticipant().then(() => console.log("Участник добавлен!"));
    }
    if (btn.id === 'addResultBtn') {
      addResult().then(() => console.log("Результат добавлен!"));
    }
  });
});

// Функции обработки
async function fetchCompetitions() {
  try {
    const competitions = await fetch('http://localhost:8082/api/competitions').then(res => res.json());
    document.getElementById('competitions').innerHTML = competitions.map(comp => `
      <tr>
        <td>${comp.id}</td>
        <td>${comp.name}</td>
        <td>${comp.location}</td>
        <td>${comp.date}</td>
        <td>
          <button onclick="deleteCompetition(${comp.id})">Удалить</button>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error("Ошибка при загрузке соревнований:", error);
  }
}

async function addCompetition() {
  const name = document.getElementById('comp-name').value;
  const location = document.getElementById('comp-location').value;
  const date = document.getElementById('comp-date').value;
  try {
    await fetch('http://localhost:8083/api/competitions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, location, date})
    });
    fetchCompetitions();  // обновить список после добавления
  } catch (error) {
    console.error("Ошибка при добавлении соревнования:", error);
  }
}

async function deleteCompetition(id) {
  try {
    await fetch(`http://localhost:8083/api/competitions/${id}`, {method: 'DELETE'});
    fetchCompetitions();  // обновить список после удаления
  } catch (error) {
    console.error("Ошибка при удалении соревнования:", error);
  }
}

async function fetchParticipants() {
  try {
    const participants = await fetch('http://localhost:8084/api/participants').then(res => res.json());
    document.getElementById('participants').innerHTML = participants.map(part => `
      <tr>
        <td>${part.id}</td>
        <td>${part.name}</td>
        <td>${part.competitionId}</td>
        <td>
          <button onclick="deleteParticipant(${part.id})">Удалить</button>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error("Ошибка при загрузке участников:", error);
  }
}

async function addParticipant() {
  const name = document.getElementById('part-name').value;
  const competitionId = document.getElementById('part-comp-id').value;
  console.log("ebal");
  try {
    console.log("ebal1");
    await fetch('http://localhost:8082/api/participants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, competitionId})
    });
    console.log("ebal3");
    fetchParticipants();  // обновить список после добавления
  }
  catch (error) {
    console.log("ebal4");
    console.error("Ошибка при добавлении участника:", error);
  }
}

async function deleteParticipant(id) {
  try {
    await fetch(`http://localhost:8082/api/participants/${id}`, {method: 'DELETE'});
    fetchParticipants();  // обновить список после удаления
  } catch (error) {
    console.error("Ошибка при удалении участника:", error);
  }
}

async function fetchResults() {
  try {
    const results = await fetch('http://localhost:8081/api/results').then(res => res.json());
    document.getElementById('results').innerHTML = results.map(res => `
      <tr>
        <td>${res.id}</td>
        <td>${res.competitionId}</td>
        <td>${res.participantId}</td>
        <td>${res.score}</td>
        <td>
          <button onclick="deleteResult(${res.id})">Удалить</button>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error("Ошибка при загрузке результатов:", error);
  }
}

async function addResult() {
  const competitionId = document.getElementById('res-comp-id').value;
  const participantId = document.getElementById('res-part-id').value;
  const score = document.getElementById('res-score').value;
  try {
    await fetch('http://localhost:8081/api/results', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({competitionId, participantId, score})
    });
    fetchResults();  // обновить список после добавления
  } catch (error) {
    console.error("Ошибка при добавлении результата:", error);
  }
}

async function deleteResult(id) {
  try {
    await fetch(`http://localhost:8081/api/results/${id}`, {method: 'DELETE'});
    fetchResults();  // обновить список после удаления
  } catch (error) {
    console.error("Ошибка при удалении результата:", error);
  }
}
