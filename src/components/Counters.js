import React,{Component} from "react";
import Counter from "./Counter";

class Counters extends Component{
    state = {
        counters:[
            {id:1, value:10},
            {id:2, value:20},
            {id:3, value:30},
            {id:4, value:40},
        ],
    };

    handleDelete=(id) =>{
        const counters=this.state.counters
        .filter(counter=>counter.id!==id);
        this.setState({
            counters,

        });
    };

    handleMinus=(id) =>{
        const counters=this.state.counters.map((counter)=>{
        if(counter.id===id){
       return {
           ...counter,
           value:counter.value-1
       }
    }else{
        return {...counter};
    }});
    this.setState({
        counters,
    })
};

handlePlus=(id) =>{
    const counters=this.state.counters.map((counter)=>{
    if(counter.id===id){
   return {
       ...counter,
       value:counter.value+1
   }
}else{
    return {...counter};
}});
this.setState({
    counters,
})
};

    handleReset=()=>{
        const counters=this.state.counters.map((counter)=>({
            ...counter,
            value:0,
        }));
        this.setState({
            counters,
        });
    };

    render(){
        return(
            <div className= "counters">
                {this.state.counters.map((counter)=>(
                    <Counter 
                    key={counter.id} 
                    value={counter.value}
                    onDelete={()=>this.handleDelete(counter.id)}
                    onMinus={()=>this.handleMinus(counter.id)}
                    onPlus={()=>this.handlePlus(counter.id)}
                    />
                    // <button>delete</button>
                ))}
                <button className="reset" onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );
    }}
export default Counters;