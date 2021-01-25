import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";

import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-'|'+'
function Money() {
    const [selected,setSelected]=useState({
        tags:[] as string[],
        note:'',
        category:'-' as Category,
        amount:0
    })
    return (
        <MyLayout >
            <TagsSection value={selected.tags}
                         onChange ={tags=>setSelected({
                             ...selected,
                             tags: tags
                         })}/>
            <NotesSection value={selected.note}
                        onChange = {(note)=>({
                            ...selected,
                            note:note
                        })}/>
            <CategorySection value={selected.category}
                             onChange = {(category)=>({
                                 ...selected,
                                 category:category
                             })}/>
            <NumberPadSection value={selected.amount}
                              onChange = {(amount)=>({
                                  ...selected,
                                  amount:amount
                              })}/>
        </MyLayout>
    );
}

export default Money;