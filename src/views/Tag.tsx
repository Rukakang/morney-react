import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

type Params ={
    id:string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag:React.FunctionComponent = ()=>{
    const {findTag,updateTag,deleteTag}=useTags();
    let {id} = useParams<Params>();
    const tag =  findTag(parseInt(id));
    const tagContent = (tag:{id:number,name:string})=>(
        <div>
            <InputWrapper>
                <Input label="标签名" placeholder="在这里输入新的标签" type="text"
                       value = {tag.name} onChange={(e)=>{
                    updateTag(tag.id,{name:e.target.value});
                }}/>
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={()=>{deleteTag(tag.id)}}>删除标签</Button>
            </Center>
        </div>
    );

    return(
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name=""/>
            </TopBar>
            {tag?tagContent(tag):<Center>tag不存在</Center>}
        </Layout>
    )
}
export {Tag};