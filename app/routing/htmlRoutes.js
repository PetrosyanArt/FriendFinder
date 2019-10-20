/*
    Steven Tran
    UofT SCS Coding Bootcamp
*/

module.exports = (app, path)=> {
    app.get('/survey', (req, res)=>{
        res.sendFile(path.resolve("./app/public/survey.html"));
    });
    
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve("./app/public/home.html"));
    });
}
