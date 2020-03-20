window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            console.log(json);
            const div = document.getElementById('container');
            div.innerHTML += `<p>Current Astronaut Count: ${json.length}</p>`;
            json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace});
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                    <div class = "astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li ${ifActive(json[i].active)}>Active: ${json[i].active}</li>
                                <li color="black">Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                `
            }
        })  
    });
});

function ifActive(value) {
    if (value) {
        return 'style="color:green;"';
    } else {
        return 'style="color:black;"';
    }
}
