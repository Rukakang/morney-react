import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";

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

const Tag:React.FunctionComponent = ()=>{
    const {findTag}=useTags();
    let {id} = useParams<Params>();
    const tag =  findTag(parseInt(id));
    return(
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name=""/>
            </TopBar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="请输入标签名"/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>

    )
}
export {Tag};