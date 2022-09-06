class Todo{
    constructor(title,completed){
        this.title=title;
        this.completed=completed;
        thid.markCompleted=function(){
            this.completed=true;
        }
    }
}
class StudentsTodo extends Todo{
    constructor(Title,completed,rollNo){
        super(title,completed);
        
    }
}
