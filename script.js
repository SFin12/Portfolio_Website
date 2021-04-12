// hook on dom loaded event
window.addEventListener('DOMContentLoaded', (event) => {
    
});
setup();

var App = {
    Assets: {
        Images: {
            Background1: 'url("./assets/stephen-leonardi-YVcg27FuJzs-unsplash.jpg")',
            Background2: 'url("./assets/keith-misner-h0Vxgz5tyXA-unsplash.jpg")'
        },
        BackgroundClass: ['background-common'],
        Icons: {}
    },
    Email: ''
}

function setup(){
    document.querySelector("h1").onclick = function(){
        var content = document.getElementsByClassName(App.Assets.BackgroundClass)[0];
        
        if (content.style.backgroundImage == App.Assets.Images.Background1) {
            content.style.backgroundImage = App.Assets.Images.Background2;
        } else {
            content.style.backgroundImage = App.Assets.Images.Background1;
        }
    }
}


