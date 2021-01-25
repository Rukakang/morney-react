import styled from "styled-components";
import React, {FunctionComponent, useState} from "react";

const Wrapper = styled.section`
    background: #FFFFFF;  
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    >ol{
    margin: 0 -12px;
      >li{
        background: #f5f5f5;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        margin: 8px 12px;
        font-size: 14px;
        &.selected{
          background: aqua;
        }
      }
    }
    >button{
      background: none;
      border: none;
      border-bottom: 1px solid #333;
      color: #666;
      padding: 2px 4px;
      margin-top: 8px;
    }
`;
type Props = {
    value: string[];
    onChange: (tas:string[]) => void;
}
const  TagsSection:React.FunctionComponent<Props> =(props)=>{
    const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
    const selectedTags = props.value;

    const onAddTag =()=>{
        const tagName = window.prompt("请输入标签名");
        if (tagName != null){
            setTags([...tags,tagName],)
        }
    }
  const onToggleTag=(tag:string)=>{
        const index = selectedTags.indexOf(tag);
        if (index>=0){
            props.onChange(selectedTags.filter(t=>t!= tag));
        }else {
            props.onChange([...selectedTags,tag]);
        }
    }
    const getClass=(tag:string)=>{
        return selectedTags.indexOf(tag)>=0?'selected':'';
    };
    return(
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={
                        () => {onToggleTag(tag);}
                    } className={getClass(tag)}
                    >{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export  {TagsSection};