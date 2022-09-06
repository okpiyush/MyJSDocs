function todo(todo1,boole){
    this.title = todo1;
    this.completed = boole;
    this.Completed=()=>{
        this.completed = true;
    }
};
const mytodo=[];
mytodo.push(new todo("I have to Drink Coffe",false));
mytodo.push(new todo("I have to Drink Water",false));
mytodo.push(new todo("I have to Drink Cold Drink",false));
 console.log([...mytodo])
mytodo[2].Completed();