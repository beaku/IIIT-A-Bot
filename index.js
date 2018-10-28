var college_ranks = [
  {
      "preference" : 1,
      "name" : "IIT Delhi",
      "closing_rank_CSE" : 120,
  },
  {
      "preference" : 2,
      "name" : "IIT Bombay",
      "closing_rank_CSE" : 60
  },
  {
      "preference" : 3,
      "name" : "IIT Madras",
      "closing_rank_CSE" : 200
  },
    {
      "preference" : 4,
      "name" : "IIT Kanpur",
      "closing_rank_CSE" : 500
  },
  {
      "preference" : 5,
      "name" : "IIT Guwahati",
      "closing_rank_CSE" : 850
  },
  {
      "preference" : 6,
      "name" : "IIT Roorkee",
      "closing_rank_CSE" : 400
  },
  {
      "preference" : 7,
      "name" : "IIT Kharagpur",
      "closing_rank_CSE" : 300
  },
  {
      "preference" : 9,
      "name" : "IIT Hyderabad",
      "closing_rank_CSE" : 800
  },{
      "preference" : 10,
      "name" : "IIT Patna",
      "closing_rank_CSE" : 1200
  },
]




"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



restService.post("/echo", function(req, res) {
  var rank = req.body.queryResult.parameters.rank;
  
  var category = req.body.queryResult.parameters.category;

  var college_array = []

  for(var i = 0; i < college_ranks.length; i++){
    if(rank <= college_ranks[i]["closing_rank_CSE"]){
      college_array.push(college_ranks[i]["name"]);
    }
  }


  var speech = "Your rank is "+ rank + " and your category is " + category + ". You can try these colleges: " + college_array.toString();
  return res.json({
    "fulfillmentMessages": [{"text": {"text": [speech]}}],
    "source":""
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
