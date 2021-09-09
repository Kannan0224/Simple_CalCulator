import React from 'react';


class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            answer:"",
        }
    }
    printvalue=e=>{
        let data=e.target.innerHTML;
        if(data==="Ans")
        {
            let result=eval(this.state.answer);
            this.setState({answer:result});
        }
        else
         this.setState({answer:this.state.answer+data});
    //     if(parseInt(data)===NaN)
    //     {
    //         // this.setState({operation:data})
    //         console.log(data);
    //     }
    //     else{

    //     }
    //     var result=this.state.value+data;
    //     console.log();
    //    this.setState({
    //        value:result
    //    });
    }

    clearvalue=()=>{
        this.setState({answer:""})
    }
    
    render()
    {
        const button=[1,2,3,4,5,6,7,8,9,0,"+","-","/","*","Ans"];

        const renderbtn=button.map((value)=>{
            if(value==="Ans")
            return <button key={value} className="btn btn-lg btn-success num ans" onClick={this.printvalue}>{value}</button>
            else
            return <button key={value} className="btn btn-lg btn-secondary num" onClick={this.printvalue}>{value}</button>
        })
        return(
            <div className="cal">
                <h6 className="text-center text-dark">CALCULATOR</h6>
                <input type="text" className="form-control" readOnly step="any" name="output" value={this.state.answer}/>
                 <button onClick={this.clearvalue} className="btn btn-danger mt-1 form-control">Clear</button>
                 <div className="numbers">
                     {renderbtn}
                 </div>
            </div>
        )
    }
}

export default Calculator;