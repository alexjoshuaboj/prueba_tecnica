function initializar() {
    setTimeout(() => {       
        let scriptJQuery = document.createElement("script");
        scriptJQuery.type = "text/javascript";
        scriptJQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js"
        scriptJQuery.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        scriptJQuery.crossOrigin = "anonymous"
        document.getElementsByTagName('body')[0].appendChild(scriptJQuery);
        let readyJQuery = document.createElement("p")
        readyJQuery.innerText = "Script JQuery cargado";
        document.getElementById('console').appendChild(readyJQuery);
    }, 1200);

    let console = document.createElement("div");
    console.className = "console m-2 p-4 bg-black text-white font-bold w-96 absolute top-0 left-0 text-sm";
    console.id = "console";
    document.getElementsByTagName('body')[0].appendChild(console);

    //main cargado
    let readyMain = document.createElement("p")
    readyMain.innerText = "Script Main cargado";
    document.getElementById('console').appendChild(readyMain);


    //fondo gris 
    setTimeout(() => {     
        let body = document.getElementsByTagName('body')[0];
        body.className = "bg-stone-300"
        let bodyBGReady = document.createElement("p")
        bodyBGReady.innerText = "Fondo gris en el body cargado";
        document.getElementById('console').appendChild(bodyBGReady);
    }, 2000);

    //recuadro blanco
    let contentWhiteReady = document.createElement("div")
    contentWhiteReady.className = "m-10 bg-white rounded-md w-center h-center flex items-center justify-center text-7xl";
    contentWhiteReady.id = "content"
    document.getElementsByTagName('body')[0].appendChild(contentWhiteReady);
    let contentReady = document.createElement("p")
    contentReady.innerText = "Recuadro cargado";
    document.getElementById('console').appendChild(contentReady);

    //añadir hola
    let holaText = document.createElement("p")
    holaText.innerText = 'Hola'
    document.getElementById('content').appendChild(holaText);
    setTimeout(() => {
        holaText.innerText = 'Hello'
    },2500)

    //generar boton 
    let buttonRestar = document.createElement("button")
    buttonRestar.innerText = 'Reiniciar'

    setTimeout(() => {
        let content =  document.getElementById('content');
          content.removeChild(content.childNodes[0])
        let ajaxReady = document.createElement("p")
        ajaxReady.innerText = "Peticion API cargada";
        document.getElementById('console').appendChild(ajaxReady);
        ajaxRequest();
    }, 4500);



}

function ajaxRequest() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            //pic
            let pic = document.createElement("img")
            pic.className = "m-2"
            pic.src = `${data.results[0].picture.large}`;
            //email
            let email = document.createElement("p")
            email.className = "text-sm m-2"
            email.innerText = `${data.results[0].email}`;
            //button
            let buttonNext = document.createElement("button");
            buttonNext.className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2"
            buttonNext.id = "continuar"
            buttonNext.innerText = "Continuar"
            buttonNext.onclick = function(){
                bye();
            };
            //user data
            let userData = document.createElement("div")
            userData.appendChild(pic);
            userData.appendChild(email);
            userData.appendChild(buttonNext);
            userData.className = "userData flex flex-col items-center justify-center"
            document.getElementById('content').appendChild(userData)
            let dataUser = document.createElement("p")
            dataUser.innerText = "Datos del usuario cargados";
            document.getElementById('console').appendChild(dataUser);
        }
      });
}

function bye(){
    let content =  document.getElementById('content');
    content.removeChild(content.childNodes[0])

    let byeText = document.createElement("p")
    byeText.innerText = 'Adios'
    document.getElementById('content').appendChild(byeText)
    
    setTimeout(() => {
        byeText.innerText = 'Bye'
    },2000)

    setTimeout(() => {
        let content =  document.getElementById('content');
            content.removeChild(content.childNodes[0])
            let buttonRestart = document.createElement("button");
            buttonRestart.className = "text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2"
            buttonRestart.id = "Reiniciar"
            buttonRestart.innerText = "Reiniciar"
            buttonRestart.onclick = function(){
                restart();
            };
            document.getElementById('content').appendChild(buttonRestart)
    }, 4000);
}


function restart(){
}

initializar();
