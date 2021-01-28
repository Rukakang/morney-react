import styled from "styled-components";
import React, {FunctionComponent, useState} from "react";
import {useTags} from "../../useTags";
import createId from "../../lib/createId";

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
    value: number[];
    onChange: (tas:number[]) => void;
}
const  TagsSection:React.FunctionComponent<Props> =(props)=>{
    const {tags,addTag} = useTags();
    const selectedTagIds = props.value;

    const onToggleTag=(tagIds:number)=>{
        const index = selectedTagIds.indexOf(tagIds);
        if (index>=0){
            props.onChange(selectedTagIds.filter(t=>t!== tagIds));
        }else {
            props.onChange([...selectedTagIds,tagIds]);
        }
    }
    const getClass=(tagId:number)=>{
        return selectedTagIds.indexOf(tagId)>=0?'selected':'';
    };
    return(
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => {onToggleTag(tag.id);}
                    } className={getClass(tag.id)}
                    >{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}

export  {TagsSection};