import { Team } from "./team.model";
import { Rated } from "./rated.model";

export interface Match extends Rated{
    key? : string,
    team1: Team,
    team2: Team,
    date: Date,
    referee: string
}