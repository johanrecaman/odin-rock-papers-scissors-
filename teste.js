const player = document.querySelectorAll('.btn');

player.forEach((button)=>{
    button.addEventListener('click',output(button.id));
});

function output(id){
    if(id == 1){
        const bot = Math.floor(Math.random() * 3);
        if(bot === 0){
            console.log('Draw! The bot chose Rock!');
        }
        else if(bot === 1){
            console.log('You lost! The bot chose Paper!');
        }
        else {
            console.log('You won! The bot chose Scissors!');
        }        
    }
    if(id == 2){
        const bot = Math.floor(Math.random() * 3);
        if(bot === 0){
            console.log('You won! The bot chose Rock!');
        }
        else if(bot === 1){
            console.log('Draw! The bot chose Paper!');
        }
        else {
            console.log('You lost! The bot chose Scissors!');
        }
    }
    if(id == 3){
        const bot = Math.floor(Math.random() * 3);
        if(bot === 0){
            console.log('You lost! The bot chose Rock!');
        }
        else if(bot === 1){
            console.log('You won! The bot chose Paper!');
        }
        else {
            console.log('Draw! The bot chose Scissors!');
        }
    }
}


