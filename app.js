const team = {
    _players: [
        {firstName: 'James', lastName: 'Dean', age: 25},
        {firstName: 'Diego', lastName: 'Montoya', age: 34},
        {firstName: 'Derek', lastName: 'Gilmore', age: 26}
    ],
    _games: [
        {opponent: 'Celtics', teamPoints: 2, opponentPoints: 4},
        {opponent: 'Bulls', teamPoints: 0, opponentPoints: 0},
        {opponent: 'Spurs', teamPoints: 4, opponentPoints: 3}
    ],

    // Getter methods
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    // Create new player method
    addPlayer(newFirstName, newLastName, newAge) {
        this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
    },

    // Create new game method
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints})
    }
}

// Add new player to array and check it worked
team.addPlayer('Brooke', 'Wilson', 32);
console.log(team._players);

// Add new game to array and check it worked
team.addGame('Jaguars', 2, 4);
console.log(team._games);

