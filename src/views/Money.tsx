import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";

import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {useRecodes} from "../hooks/useRecodes";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`

type Category = '-'|'+';
const defaultFormData = {
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
};
function Money() {
    const [selected,setSelected]=useState(defaultFormData);
    const onChange = (obj:Partial<typeof selected>)=>setSelected({
        ...selected,
        ...obj
    });

    const{recodes,addRecode} = useRecodes();
    const onSubmit = () =>{
        if(addRecode(selected)){
            alert('保存成功');
            setSelected(defaultFormData);
        }
    }
    return (
        <MyLayout >
            <TagsSection value={selected.tagIds}
                         onChange ={tagIds=>onChange({tagIds:tagIds})}/>
            <NotesSection value={selected.note}
                        onChange = {(note)=>onChange({note:note})}/>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange = {(category)=>onChange({category: category})}/>
            </CategoryWrapper>

            <NumberPadSection value={selected.amount}
                              onChange = {(amount =>onChange({amount: amount}) )}
                              onOk={onSubmit}/>
        </MyLayout>
    );
}

export default Money;