import styled from "styled-components";
import React from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
    display: block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`

type Props = {
    label:string;
}& React.InputHTMLAttributes<HTMLInputElement>  //继承input的所有属性，就不用在Props里一个一个传了
const Input:React.FunctionComponent<Props> = (props)=>{
    //...rest的意思就是除去label 和children以外props的所有属性即input的所有属性都给rest
    const {label,children,...rest} = props;
    return(
        <Label>
            <span>{props.label}</span>
            <input type={props.type} placeholder={props.placeholder}
                   defaultValue={props.defaultValue}
                   value ={props.value}
                   onChange={props.onChange}
                   onBlur={props.onBlur}
                   //ref={refInput} 函数组件其实不支持ref,ref用于非受控组件，改成受控组件
            />
        </Label>
    )
}
export {Input};