import React, {useState} from "react";
import Wrapper from "./NumberPadSection/Wrapper";
import generateOutput from "./NumberPadSection/generateOutput";

type Props = {
    value: number,
    onChange: (amount: number) => void;
    onOk: () => void;
}

const NumberPadSection:React.FunctionComponent<Props>=(props)=>{
    const [output,_setOutput] = useState(props.value.toString());
    const setOutput =(output:string)=>{
        console.log(output);
        let newValue;
        if (output.length > 16){
            newValue = output.slice(0,16);
        }else if (output.length === 0){
            newValue = '0';
        }else {
            newValue=output;
        }
        _setOutput(newValue);
        props.onChange(parseFloat(output));
    }
    const onClickButtonWrapper=(e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent;
        if (text===null){return}
        setOutput(generateOutput(text ,output));

        if (text==='OK'){
            props.onOk();
        }
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