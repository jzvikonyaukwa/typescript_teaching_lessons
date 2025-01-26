import { Coach } from "./Coach";

export class RugbyCoach implements Coach{
    getDailyWorkout(): string {
        return "rugby workout today";
    }
    
}