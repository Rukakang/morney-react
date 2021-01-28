import {SVGAttributes} from "react";
import classNames from "classnames";

const importAll =(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icon',true,/\.svg$/))
}catch (error){
    console.log(error);
}

type Props ={
    name?:string;
} & SVGAttributes<SVGElement> ;//继承SVG的所有属性
const Icon = (props:Props)=>{
    const{name,children,className,...rest}= props; //意思是把props所有属性赋给name,children,className,出去这些其他全都给...rest
    return(
        <svg className={classNames('icon',className)} {...rest}>
            {props.name && <use xlinkHref={'#'+props.name}/>}
        </svg>
    )
}

export default Icon;