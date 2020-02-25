
function generateMainHtml() {
    const mainHtmlString = `<!DOCTYPE html>

    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://kit.fontawesome.com/587cb420b5.js" crossorigin="anonymous"></script>
        <title>Main HTML</title>
    </head>
    
    <body>
        <nav class="navbar navbar-dark bg-danger d-flex justify-content-center" style="height: 100px;">
            <span class="navbar-brand mb-0 h1" style="font-size: 32px;">My Team</span>
        </nav>
    
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary" style="font-family: Arial, Helvetica, sans-serif;">
                <h1>Eugene</h1>
                <h2><i class="fas fa-user-graduate"></i>Intern</h2>       
            </div>
            <div class="card-body text-dark bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: <a href="#"> </a></li>
                    <li class="list-group-item">School: </li>
                </ul>
            </div>
        </div>
    
    </body>
    
    </html>`
    return mainHtmlString;
}

function generateManagerHtml(data){
    const managerHtmlString =
    `<div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary" style="font-family: Arial, Helvetica, sans-serif;">
            <h1>${data.getName()}</h1>
            <h2><i class="fas fa-mug-hot"></i>${data.getRole()}</h2>       
        </div>
        <div class="card-body text-dark bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href="#">${data.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${data.getOfficeNum()}</li>
            </ul>
        </div>
    </div>`
    return managerHtmlString;
}

function generateEngineerHtml(data){
    const engineerHtmlString =
    `<div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary" style="font-family: Arial, Helvetica, sans-serif;">
            <h1>${data.getName()}</h1>
            <h2><i class="fas fa-glasses"></i>${data.getRole()}</h2>       
        </div>
        <div class="card-body text-dark bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href="#">${data.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${data.gitHub}">${data.gitHub}</a></li>
            </ul>
        </div>
    </div>`
    return engineerHtmlString;
}

function generateInternHtml(data){
    const internHtmlString =
    `<div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary" style="font-family: Arial, Helvetica, sans-serif;">
            <h1>${data.getName()}</h1>
            <h2><i class="fas fa-user-graduate"></i>${data.getRole()}</h2>       
        </div>
        <div class="card-body text-dark bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href="#">${data.getEmail()}</a></li>
                <li class="list-group-item">School: ${data.getSchool()}</li>
            </ul>
        </div>
    </div>`
    return internHtmlString;
}

module.exports = {
    main: generateMainHtml,
    manager: generateManagerHtml,
    engineer: generateEngineerHtml,
    intern: generateInternHtml
};