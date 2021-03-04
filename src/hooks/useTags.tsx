import {useEffect,  useState} from "react";
import createId from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useTags = () =>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || JSON.stringify([
        {"id":createId(),"name":"衣服"},
        {"id":createId(),"name":"吃饭饭"},
        {"id":createId(),"name":"家庭消费"},
        {"id":createId(),"name":"粗去玩"}
    ]));
    const [tags,setTags] = useState<{ id:number;name:string }[]>(localTags);
    useEffect(()=>{
        setTags((localTags)=>([...localTags]));
    },[])
    useUpdate(()=>{

        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])

    const findTag = (id:number)=>tags.filter(tag=>tag.id===id)[0];
    const findTagIndex =(id:number)=>{
        let result = -1;
        for (let i = 0; i <tags.length; i++){
            if (tags[i].id === id){
                result = i;
                break
            }
        }
        return result;
    }
    const updateTag = (id:number,obj:{name:string})=>{
        setTags(tags.map(tag=>tag.id ===id?{id,name:obj.name}:tag));
    }
    const deleteTag =(id:number)=>{
        setTags(tags.filter(tag=>tag.id !== id))
    }
    const addTag =()=>{
        const tagName = window.prompt("请输入标签名");
        if (tagName != null && tagName !== ''){
            setTags([...tags, {id:createId(),name:tagName}],)
        }
    }
    const getName = (id:number) =>{
        const tag = tags.filter(tag=>tag.id ===id)[0];
        return tag ? tag.name :'';

    }
    return {tags,setTags,getName,findTag,findTagIndex,updateTag,deleteTag, addTag};
}
export {useTags};