const proffys = [
        { name, avatar, whatsapp, bio, subject, cost, weekday, time_from, time_to }
    ]
    /*O professor preencheu vários dados no backend acima e iria ensinar como alterar no fronteend a partir do backend*/



const expŕess = require("express")
const server = express()
server.use(express.static("public"))
    .get("/", (req, res) => {
        return res.sendFile(__dirname + "/views/index.html")
    })
    .get("/study", (req, res) => {
        return res.sendFile(__dirname + "/views/study.html")
    })
    .get("/give-classes", (req, res) => {
        return res.sendFile(__dirname + "views/give-classes.html")
    })
    .listen(5500)