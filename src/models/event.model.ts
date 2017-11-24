// export class EventModel{
//     constructor (
//         public name: string,
//         public description: string,
//         public date: Date,
//         public imgUrl: string,        
//         public comments: number,
//         public likes:number,
//         public liked:boolean,        
//         public checkedIn:boolean
//     ){}
// }

export interface EventModel{
    key? : string ,
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