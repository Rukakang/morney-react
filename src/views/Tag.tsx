import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";

type Params ={
    id:string
}
const Tag:React.FunctionComponent = ()=>{
    const {findTag}=useTags();
    let {id} = useParams<Params>();
    const tag =  findTag(parseInt(id));
    return(
        <div>{tag.name}</div>
    )
}
export {Tag};