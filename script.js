const player = document.querySelectorAll('.btn');

const boxTextChange = (boxText)=>{
    const box = document.querySelector('.textBox');
    box.textContent = boxText;

}
player.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.id ==1){
            const bot = Math.floor(Math.random() * 3);
            if(bot === 0){
                boxTextChange('Draw! The bot chose Rock!')
            }
            else if(bot === 1){
                boxTextChange('You lost! The bot chose Paper!')
            }
            else {
                boxTextChange('You won! The bot chose Scissors!')
            }        
        }
        if(button.id ==2){
            const bot = Math.floor(Math.random() * 3);
            if(bot === 0){
                boxTextChange('You won! The bot chose Rock!')
            }
            else if(bot === 1){
                boxTextChange('Draw! The bot chose Paper!')
            }
            else {
                boxTextChange('You lost! The bot chose Scissors!')
            }
        }
        if(button.id ==3){
            const bot = Math.floor(Math.random() * 3);
            if(bot === 0){
                boxTextChange('You lost! The bot chose Rock!')
            }
            else if(bot === 1){
                boxTextChange('You won! The bot chose Paper!')
            }
            else {
                boxTextChange('Draw! The bot chose Scissors!')
            }
        }
    });
});

