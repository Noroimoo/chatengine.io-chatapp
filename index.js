const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      //Change Private Key by regestring at chatengine.io
      {headers: {"private-key": "438beae5-68dc-4543-b600-2d01a4c40928"}}
      )
    return res.status(r.status).json(r.data)
  } catch (e) {
    console.error(e);
      return res.status(500).json({message: 'An error occurred'});
  }
});

app.listen(3001);