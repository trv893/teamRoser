// DO NOT TEST THIS
const Employee = require ('../lib/employee');
const Engineer = require ('../lib/engineer');
const Manager = require ('../lib/managers');
const Intern = require ('../lib/intern');
const fs = require('fs');

let fullhtmlString = "";
let cardHtmlString ="";

function genHtml(employeeArray){
    console.log(employeeArray);
    employeeArray.forEach(element => {
        switch (element.role){
            case 'Engineer':
                return cardHtmlString += `<div class="engineer mt-2 shadow m-4 rounded" style="width: 18rem;">
                <div class="bg-primary bg-gradient w-full rounded-top">
                    <h5 class="text-white ps-2 pt-2">
                        ${element.name}
                    </h5>
                    <h6 class="text-white ps-2 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette2" viewBox="0 0 16 16">
                            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"/>
                            <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"/>
                        </svg>   Engineer
                    </h6>
                </div>
                <div class="bg-light w-full center-block">
                    <div class="bg-white mt-3 border border-dark border-opacity-10 mx-auto" style="width: 90%;">
                        <p class="ps-2 ms-2 pt-2">ID: ${element.id} 2</p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mx-auto my-2" style="width: 90%;">
                        <p class="ps-2 py-2 ms-2 overflow-auto">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mb-4 mx-auto" style="width: 90%;">
                        <p class="ps-2  ms-2 pt-2 overflow-auto">Github: <a href="https://github.com/${element.github}">${element.github}</a></p>
                    </div>
                </div>
                </div>`;
            case "Manager":
                return cardHtmlString += `<div class="manager mt-2 shadow m-4 rounded" style="width: 18rem;">
                <div class="bg-primary bg-gradient w-full rounded-top">
                    <h5 class="text-white ps-2 pt-2">
                        ${element.name}
                    </h5>
                    <h6 class="text-white ps-2 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"/>
                          </svg>   Manager
                    </h6>
                </div>
                <div class="bg-light w-full center-block">
                    <div class="bg-white mt-3 border border-dark border-opacity-10 mx-auto" style="width: 90%;">
                        <p class="ps-2 ms-2 pt-2">ID: ${element.id}</p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mx-auto my-2" style="width: 90%;">
                        <p class="ps-2 py-2 ms-2 overflow-auto">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mb-4 mx-auto" style="width: 90%;">
                        <p class="ps-2  ms-2 pt-2 overflow-auto">Office Number: <span>${element.officeNumber}</span></p>
                    </div>
                </div>
            </div>`;
            case "Intern":
                return cardHtmlString += `<div class="intern mt-2 shadow m-4 rounded" style="width: 18rem;">
                <div class="bg-primary bg-gradient w-full rounded-top">
                    <h5 class="text-white ps-2 pt-2">
                        ${element.name}
                    </h5>
                    <h6 class="text-white ps-2 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                        </svg>   Intern
                    </h6>
                </div>
                <div class="bg-light w-full center-block">
                    <div class="bg-white mt-3 border border-dark border-opacity-10 mx-auto" style="width: 90%;">
                        <p class="ps-2 ms-2 pt-2">ID: ${element.id}</p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mx-auto my-2" style="width: 90%;">
                        <p class="ps-2 py-2 ms-2 overflow-auto">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                    </div>
                    <div class="bg-white border border-dark border-opacity-10 mb-4 mx-auto" style="width: 90%;">
                        <p class="ps-2  ms-2 pt-2 overflow-auto">School: <span>${element.school}</span></p>
                    </div>
                </div>
                </div>`
        }        
        
    });
        fullhtmlString = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Roseter</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
            <script src="https://kit.fontawesome.com/1372c8c1ec.js" crossorigin="anonymous"></script>
        </head>
        
        <body>
        
            <header class="bg-danger bg-gradient text-white text-center py-4">
                <h1>My Team</h1>
            </header>
        
            <body class="bg-light bg-opacity-50">
        
        
                <section class="container-lg d-flex flex-wrap justify-content-around mt-5">
        ${cardHtmlString}
        </section>

        </body>
    
    
    
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
            integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
    fs.writeFile('./dist/index.html', fullhtmlString, (err) => 
      err ? console.error(err) : console.log('Success!')
    );

};
module.exports = genHtml