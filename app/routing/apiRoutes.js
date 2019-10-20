
var friendsData = require("../data/friends");

findMatch =(userScore)=>{
    var index = 0;
    var lowestDiff = 0;
    for(var i=0; i<friendsData.length; i++){
        var totalDiff = 0;
        for(var j=0; j<userScore.length; j++){
            var scoreDiff = Math.abs(userScore[j] - friendsData[i].scores[j]);
            totalDiff += scoreDiff;
        }
        if(i==0){
            lowestDiff = totalDiff;
        }
        else if(i!=0 && totalDiff < lowestDiff){
            lowestDiff = totalDiff;
            index = i;
        }
    }
    return index;
}

module.exports = (app)=>{
    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });
    
    app.post('/api/friends', (req, res)=>{
        var userData = req.body;
        var index = findMatch(userData.scores);
        friendsData.push(req.body);
        res.json(friendsData[index]);
    });
}
