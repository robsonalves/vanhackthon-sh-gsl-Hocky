export interface Event{
    key? : string,
    name: string,
    eventType : string,
    description: string,
    date: Date,
    imgUrl: string,        
    comments: number,
    likes:number,
    liked:boolean,        
    checkedIn:boolean
}
 export class EventJoined{
     key : string;
     username : string;
     eventKey : string;  
 }

export interface Event{
    key? : string,
    name: string,
    eventType : string,
    description: string,
    date: Date,
    imgUrl: string,        
    comments: number,
    likes:number,
    liked:boolean,        
    checkedIn:boolean
}
 export class EventJoined{
     username : string;
     eventKey : string;  
 }

