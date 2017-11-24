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