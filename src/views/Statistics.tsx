import Layout from "components/Layout";
import React, {ReactNode, useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import {RecodeItem, useRecodes} from "../hooks/useRecodes";
import {useTags} from "../hooks/useTags";
import dayjs from "dayjs";


const CategoryWrapper = styled.div`
  background: #dfffc5;
`;

const Item =styled.div`
  display: flex;
  justify-content: space-between;
  background: #dfffc5;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  
  
  >.note{

    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
  
`;

const Header = styled.h3`
display: flex;
justify-content: space-between;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
`
function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-');
    const {recodes,updateRecode} =useRecodes();
    const {getName} = useTags();
    const hash:{[K:string]:RecodeItem[]} = {};
    const selectedRecodes = recodes.filter(t=>t.category ===category);
    selectedRecodes.forEach(r=>{
        const key = dayjs(r.createAt).format('YYYY年MM月DD日');
        if (!(key in hash)){
            hash[key]=[];
        }
        hash[key].push(r);
    })
    const array = Object.entries(hash).sort((a,b)=>{
        if (a[0]===b[0]){return 0}
        if (a[0] > b[0]){return -1}
        if (a[0] < b[0]){return 1}
        return 0
    })
    let sum = 0;
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value=>setCategory(value)}>
                </CategorySection>
            </CategoryWrapper>
            {array.map(([date,recodes])=>
                <div key={date}>
                    <Header>
                        <span> {date}</span>
                        <span>
                            {recodes.map((r,index)=>{
                                sum = sum + r.amount
                                if(index === recodes.length -1){
                                    const newSum = sum;
                                    sum = 0;
                                    return '￥'+newSum;
                                }else{
                                    return '';
                                }
                            })
                            }
                        </span>
                    </Header>
                    <div>
                        {recodes.map(
                            (r,index)=>{
                                return (
                                    <Item key={index}>
                                        <div className="tags" >
                                            {r.tagIds
                                                .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                                .reduce((result,span,index,array)=>
                                                    result.concat(index<array.length-1?[span,',']:[span]),[] as ReactNode[])
                                            }
                                        </div>
                                        <div className="note" title={r.note}>
                                            {r.note}
                                        </div>
                                        <div className ="amount">
                                            ￥{r.amount}
                                        </div>
                                        {/*{dayjs(r.createAt).format('YYYY年MM月DD日')}*/}
                                    </Item>
                                )
                            }
                        )}
                    </div>
                </div>

            )}

        </Layout>
    );
}

export default Statistics;