window.addEventListener('load', function () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function (response) {
        response.json().then(function (json) {
            json.sort((b, a) => {
                return a.hoursInSpace - b.hoursInSpace;
            });
            container.innerHTML += `<h3>Total Astronauts: ${json.length}</h3>`;
            for (let x in json) {
                if (json[x].active === true) {
                    json[x].active = `<span style="color:green;font-weight:bold;">${json[x].active}</span>`;
                }
                container.innerHTML += `<div class="astronaut">
                      <div class="bio">
                      <h3>${json[x].firstName} ${json[x].lastName}</h3>
                      <ul>
                          <li>Hours in space: ${json[x].hoursInSpace}</li>
                          <li>Active: ${json[x].active}</li>
                          <li>Skills: ${json[x].skills.join(', ')}</li>
                      </ul>
                      </div>
                      <img class="avatar" src="${json[x].picture}"/>
                  </div>`;
            }
        });
    });
});
