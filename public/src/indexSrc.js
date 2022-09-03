import * as components from "./components/index.js"
import data from './components/data/data.js'

class AppContainer extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render (){
        data.forEach((element)=> {
            this.shadowRoot.innerHTML += `
            <my-post 
            pp='${element.pp}' 
            username='${element.username}' 
            location='${element.location}' 
            post='${element.post}' 
            likes='${element.likes}' 
            cap='${element.cap}'
            hastag='${element.hastag}' 
            comments = '${element.commets}' 
            date= '${element.date}'>
            </my-post>
            `;
        })

        }
        

}

customElements.define("app-container",AppContainer);