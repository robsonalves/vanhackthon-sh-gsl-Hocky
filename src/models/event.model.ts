export class EventModel{
    constructor (
        public ame: string,
        public description: string,
        public date: Date,
        public imgUrl: string,        
        public comments: number,
        public likes:number,
        public liked:boolean,        
        public checkedIn:boolean
    ){}
}