import styled from "styled-components";
import React, {useRef, useState} from "react";
import {Input} from "../../components/Input";

const Wrapper =styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props ={
    value:string,
    onChange:(note:string)=>void
}
const NotesSection:React.FunctionComponent<Props> = (props)=>{
    const note = props.value;
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur=()=>{
        if(refInput.current!==null){
            props.onChange(refInput.current.value);
        }
    }
    return(<Wrapper>
        <Input label="备注" type ="text" placeholder="在这里输入备注"
                defaultValue={note} onBlur={onBlur}>
            {/*<span>备注</span>
            <input type="text" placeholder="在这里输入备注" defaultValue={note}
                   onBlur={onBlur}
                   ref={refInput}
            />*/}
        </Input>
    </Wrapper>)
}
export {NotesSection};