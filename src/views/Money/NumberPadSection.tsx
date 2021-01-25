import styled from "styled-components";
import React, {useState} from "react";
import Wrapper from "./NumberPadSection/Wrapper";
import generateOutput from "./NumberPadSection/generateOutput";




const NumberPadSection:React.FunctionComponent=()=>{
    const[output,_setOutput] = useState('0');
    const setOutput =(output:string)=>{
        if (output.length > 16){
            output=output.slice(0,16);
        }
        _setOutput(output);
    }
    const onClickButtonWrapper=(e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent;
        if (text===null){return}
        setOutput(generateOutput(text ,output));

        if (text==='OK'){return;}



    }
    return(
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button>.</button>
                <button className="zero">0</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection};