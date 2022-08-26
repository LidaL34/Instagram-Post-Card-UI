class MyPost extends HTMLElement {
    static get observedAttributes(){
        return ['pp','username','location','post','likes','cap', 'hastag', 'comments','date']
    }
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        
        <link href="https://fonts.google.com/specimen/Ubuntu?query=ubu" rel="stylesheet">
        
        <link href="./src/components/post/style.css" rel="stylesheet">
        
        <img src= ${this.pp} alt="profile" class="profile">
        <img src="./img/settings.png" alt="more" class="settings">
        <img src="./img/ring.png" alt="story" class="story">
        
        <p class="title">
        <b>${this.username}</b>
        <br>
        ${this.location}
        </p>
        
        <img src= ${this.post} alt="fondo" width="300" height="300">
        
        <div>
        <img src="./img/heart.png" alt="like" class="like">
        <img src="./img/chat.png" alt="comments" class="comment">
        <img src="./img/send.png" alt="share" class="share">
        
        <img src="./img/save.png" alt="save" class="save">
        </div>
        
        <div class="allText">
        
        <p class="lowertext">
        <b>${this.likes}</b>
        <br>
        <b>${this.username}</b> ${this.cap} 
        <i style="color: rgb(43, 181, 223);">${this.hastag} </i>
        
        </p>
        
        <p class="subtext">
        ${this.comments}   
        </p>
        
        <p class="date">
        ${this.date}
        </p>
        </div>
        
        <section>
        <div class="square"></div>
        </section>
        `;
    }
}

customElements.define("my-post",MyPost);
export default MyPost;