function montyHall(changeDoor) {

    let car = Math.floor(Math.random() * 3); 

    let userDoor = Math.floor(Math.random() * 3); 

    let revealedDoor = [0,1,2].find((door) => door !== car && door !== userDoor);

    if(changeDoor === true){
        return car === [0,1,2].find((door) => door !== userDoor && door !== revealedDoor)
    }
    else {
        return car === userDoor
    }

}

function game(num, changeDoor) {

    let gamesWon = 0;

    for(let i = 0; i < num; i++){
        gamesWon = gamesWon + montyHall(changeDoor)
    }

    return gamesWon
}


console.log(game(10000, changeDoor = true));  

console.log(game(10000, changeDoor = false));  

