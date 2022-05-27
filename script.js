const bot_move = Math.floor(Math.random() * 3);

const player_move = parseInt(prompt('Hello there, select your move:\n [ 1 ] ROCK\n [ 2 ] PAPER\n [ 3 ] SCISSORS'));
switch(player_move){
    case 1:
        if(bot_move === 0){
            console.log('Draw! The bot chose Rock!');
        }
        else if(bot_move === 1){
            console.log('You lost! The bot chose Paper!');
        }
        else {
            console.log('You won! The bot chose Scissors!');
        }
        break;
    case 2:
        if(bot_move === 0){
            console.log('You won! The bot chose Rock!');
        }
        else if(bot_move === 1){
            console.log('Draw! The bot chose Paper!');
        }
        else {
            console.log('You lost! The bot chose Scissors!');
        }

        break;
    case 3:
        if(bot_move === 0){
            console.log('You lost! The bot chose Rock!');
        }
        else if(bot_move === 1){
            console.log('You won! The bot chose Paper!');
        }
        else {
            console.log('Draw! caralho The bot chose Scissors!');
        }
        break;
    default:
        console.log('What? F5 plz...');
        break;
}