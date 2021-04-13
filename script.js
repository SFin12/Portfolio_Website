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
        console.log(content);
        console.log(content.style.backgroundImage);
        console.log(App.Assets.Images.Background1.substr(7));
        if (content.style.backgroundImage.includes(App.Assets.Images.Background2.substr(7))) {
            content.style.backgroundImage = App.Assets.Images.Background1;
        } else {
            content.style.backgroundImage = App.Assets.Images.Background2;
        }
    }
}


