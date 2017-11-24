
import { Rated } from "./rated.model";

export interface Player extends Rated {
    key? : string,
    name: string,
    number: number,
    position: string,
    age: number,
    imgUrl: string,        
    shoot: string
}