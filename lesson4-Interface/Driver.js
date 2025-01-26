"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const RugbyCoach_1 = require("./RugbyCoach");
let cricketCoach = new CricketCoach_1.CricketCoach();
let rugbyCoach = new RugbyCoach_1.RugbyCoach();
console.log(cricketCoach.getDailyWorkout());
console.log(rugbyCoach.getDailyWorkout());
