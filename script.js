window.addEventListener('load', async function () {
    try {
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const data = await response.json();
        data.sort((b, a) => {
            return a.hoursInSpace - b.hoursInSpace;
        });

        container.innerHTML += `<h3>Total Astronauts: ${data.length}</h3>`;

        for (let x in data) {
            if (data[x].active === true) {
                data[x].active = `<span style="color:green;font-weight:bold;">${data[x].active}</span>`;
            }
            container.innerHTML += `<div class="astronaut">
                <div class="bio">
                <h3>${data[x].firstName} ${data[x].lastName}</h3>
                <ul>
                    <li>Hours in space: ${data[x].hoursInSpace}</li>
                    <li>Active: ${data[x].active}</li>
                    <li>Skills: ${data[x].skills.join(', ')}</li>
                </ul>
                </div>
                <img class="avatar" src="${data[x].picture}"/>
            </div>`;
        }
    }
    catch {
        container.innerHTML = `<h1 style='color:red;font-size: 5em;'>ERROR</h1>
        <h2 style='color:red;font-size: 2em;'>The API URL is likely malformed.</h2>`;
        console.error("ERROR: The API URL is likely malformed.");
    }
});
