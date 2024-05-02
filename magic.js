// console.log ("C:\Users\Daniella\Desktop");
var express = require("express");
const app = express();
const path = require("path");

app.get("/", (request, response) => {
   response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index", (request, response) => {
   response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/alzheimers_info", (request, response) => {
   response.sendFile(path.join(__dirname, "Alzheimers_info.html"));
});

app.get("/schizophrenia_info", (request, response) => {
   response.sendFile(path.join(__dirname, "Schizophrenia_info.html"));
});

app.get("/alzheimers_data", (request, response) => {
   response.sendFile(path.join(__dirname, "alzheimers_data.html"));
   let a1count = 0
   let a2count = 0
   let a3count = 0
   const formData = request.query;
   for (let param in formData) {
      if (a_stage1_names.includes(param)) {
         console.log(param, " : ", formData[param]);
         a1count++
      }
      else if (a_stage2_names.includes(param)) {
         console.log(param, " : ", formData[param]);
         a2count++
      }
      else if (a_stage3_names.includes(param)) {
         console.log(param, " : ", formData[param]);
         a3count++
      }
   }
   console.log(a1count)
   console.log(a2count)
   console.log(a3count)

   if (a1count > a2count) {
      if (a1count > a3count) {
         console.log("a1 has the most")
      } else {
         console.log("a3 is the greatest")
      }
  }
   else if (a2count > a3count){
      console.log("a2 is the greatest")
   }
   else {
      console.log("a3 is the greatest")
   }



});

app.get("/schizophrenia_data", (request, response) => {
   response.sendFile(path.join(__dirname, "schizophrenia_data.html"));
   // response.sendFile(path.join(__dirname, "alzheimers_data.php"));
   // console.log(request.query)
});
let s1count = 0
let s2count = 0
let s3count = 0
const formData = request.query;
for (let param in formData) {
   if (s_stage1_names.includes(param)) {
      console.log(param, " : ", formData[param]);
      s1count++
   }
   else if (s_stage2_names.includes(param)) {
      console.log(param, " : ", formData[param]);
      s2count++
   }
   else if (s_stage3_names.includes(param)) {
      console.log(param, " : ", formData[param]);
      s3count++
   }
   console.log(s1count)
   console.log(s2count)
   console.log(s3count)

   if (s1count > s2count) {
      if (s1count > s3count) {
         console.log("s1 has the most")
      } else {
         console.log("a3 is the greatest")
      }
  }
   else if (a2count > a3count){
      console.log("a2 is the greatest")
   }
   else {
      console.log("a3 is the greatest")
   }


app.get("/favicon", (request, response) => {
   response.sendFile(path.join(__dirname, "favicon.jpg"));
});

app.get("/alzheimers_form", (request, response) => {
   response.sendFile(path.join(__dirname, "alzheimers_form.html"));
});

app.get("/schizophrenia_form", (request, response) => {
   response.sendFile(path.join(__dirname, "schizophrenia_form.html"));
});

app.listen(3000);

const a_stage1_names = [
   "remembering_name",
   "recalling_recent_memories",
   "forgetting_valuables",
   "making_plans",
   "organizational_skills",
];
const a_stage2_names = [
   "critical_remembring_events",
   "learning_new_things",
   "forming_new_memories",
   "remembering_own_name",
   "difficulty_reading_writing",
   "remebering_family_names",
   "losing_track_time_setting",
   "sudden_mood_swings",
   "a_hallucinations",
   "paranoia",
   "a_delusions",
   "nervous_restless",
];
const a_stage3_names = [
   "basic_physcial_activities",
   "loss_bladder_control",
   "basic_conversation",
   "prone_infections",
];

const s_stage1_names = [
   "social_isolation",
   "mild_hallucinations",
   "neglecting_hygiene",
   "anxiety",
   "sleep_problems",
   "difficulty_concentrating",
];

const s_stage2_names = [
   "hallucinations_serious",
   "delusions",
   "disorganized_thoughts",
   "mumbling",
   "useless_movement",
   "wandering",
   "laughing_self",
   "numb_emotions",
];

const s_stage3_names = [
   "social_withdrawal",
   "difficulty_planning",
   "absent_expression",
   "monotone_voice",
   "general_disinterest",
];

// Stage one: When symptoms like lack of hygiene slected most likely stage one bc its the very beggining
// Stage 3: any symptoms selected stage 3 most likely stage 3 most severe symptoms
// if symptoms are selected from 2 different stages the stage with more slected(# of symptoms) is the stage.
