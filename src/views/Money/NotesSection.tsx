import styled from "styled-components";
import React, {ChangeEventHandler, useRef, useState} from "react";
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
    const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
        props.onChange(e.target.value);
    }
    return(<Wrapper>
        <Input label="备注" type ="text" placeholder="在这里输入备注"
                value={note} onChange={onChange}>
        </Input>
    </Wrapper>)
}
export {NotesSection};