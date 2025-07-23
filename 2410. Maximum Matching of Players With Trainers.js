/* You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.
The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.
Return the maximum number of matchings between players and trainers that satisfy these conditions. */
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort(function(a, b){return b - a});
    trainers.sort(function(a, b){return b - a});
    var j = 0;
    for (var i = 0; i < players.length && j < trainers.length; i ++) {
        if (trainers[j] >= players[i]) {
            j ++;
        }
    }
    return j;
};
