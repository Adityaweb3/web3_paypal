const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;
const ABI = require("./abi.json");

app.use(cors());
app.use(express.json());


app.get("/getNameAndBalance", async (req, res) => {

  const {userAdress} = req.query ;
  const response = await Moralis.EvmApi.utils.reunContractFunction({
    chain : "0x13881" ,
    address : "0xA56104dBe32190530E8810b898aB810dfa837131",
    functionName : "getMyName" ,
    abi : ABI ,
    params : {_user : userAddress}
  });

  const jsonResponseName = response.raw;
  const jsonResponse ={
    name : jsonResponseName ,
  }

  return res.status(200).json(jsonResponse);
});



Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
