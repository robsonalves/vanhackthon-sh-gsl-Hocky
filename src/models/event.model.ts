export interface Event{
    key? : string,
    name: string,
    eventType : string,
    description: string,
    date: number,
    imgUrl: string,        
    comments: number,
    likes:number,
    liked:boolean,        
    checkedIn:boolean
}
 export class EventJoined{
     key? : string;
     username : string;
     eventKey : string;  
 }
