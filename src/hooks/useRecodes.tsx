import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecodeItem = {
    tagIds:number[];
    note:string;
    category:'-'|'+';
    amount:number;
    createAt:string;
}
type NewRecodeItem = Omit<RecodeItem, 'createAt'>;
const useRecodes = () =>{
    const [recodes,setRecodes]=useState<RecodeItem[]>([]);
    useEffect(()=>{
        setRecodes(JSON.parse(window.localStorage.getItem('recodes')||'[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('recodes',JSON.stringify(recodes));
    },[recodes]);
    const addRecode = (newRecode:NewRecodeItem) =>{
        if (newRecode.amount<=0){
            alert('请输入金额');
            return false;
        }
        if (newRecode.tagIds.length ===0){
            alert('请选择标签');
            return false;
        }
        const recode = {...newRecode,createAt:(new Date()).toISOString()}
        setRecodes([...recodes,recode])


    }
    const updateRecode = ()=>{

    }

    return {recodes,addRecode,updateRecode};
}
export {useRecodes};