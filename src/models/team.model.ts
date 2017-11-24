import { Rated } from "./rated.model";
import { Player } from "./player.model";

export interface Team extends Rated {
    key? : string,
    name: string,
    chief: string,
    imgUrl: string;
    players: Player[]    
}