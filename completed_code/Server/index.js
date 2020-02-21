var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");
const PORT = process.env.PORT || 8000;
const cors = require("cors")({ origin: true });
var server = require("http").Server(app);
var io = require("socket.io")(server);

const uri =
    "mongodb+srv://Naseer-test:twofourtwosix2426@learnmdb-vehee.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var messages;
client.connect(err => {
    if (err != null) {
        console.log(err);
    }
    messages = client.db("Telegram").collection("Chat");
    console.log("Connected to mongo boi");

    // client.close();
});

app.use(bodyParser.json());
app.use(cors);
app.get("/", async (req, res) => {
    messages.find().toArray((err, docs) => {
        res.send(docs);
    });
});

app.post("/send", async (req, res) => {
    var response = await messages.insertOne(req.body);
    res.send(response);
});

io.on("connection", socket => {
    console.log("connected");
    console.log(socket.id);

    socket.on("send", data => {
        socket.broadcast.emit("recieving", data);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});
