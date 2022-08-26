import * as components from "./components/index.js"

class AppContainer extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render (){
        this.shadowRoot.innerHTML += `
        <my-post pp='img/pp.jpg' username='LidaLee' location='Antartida' post='img/bg.jpg' likes='2000 likes' cap='La vida es eso que pasa cuendo pasa la vida' hastag='#Antartida' comments = 'View all 130 comments' date= '1 DAY AGO'></my-post>
        `;
    }

}

customElements.define("app-container",AppContainer);