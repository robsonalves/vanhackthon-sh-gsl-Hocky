import { Player } from './player.model';

export interface Reward extends Player {
    date: Date,
    point: number,
    place: string
}