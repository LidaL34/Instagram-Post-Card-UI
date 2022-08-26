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
        <my-post pp='img/pp.jpg' username='LidaLee' location='Antartida' post='img/bg.jpg' likes='2000 likes' cap='Neverland' hastag='#Antartida' date= '1 DAY AGO'></my-post>
        <my-post pp='img/pp.jpg' username='LidaLee' location='Antartida' post='img/bg.jpg' likes='2000 likes' cap='Neverland' hastag='#Antartida' date= '1 DAY AGO'></my-post>


        `;
    }

}

customElements.define("app-container",AppContainer);