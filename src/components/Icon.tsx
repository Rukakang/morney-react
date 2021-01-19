
type Props ={
    name:string;
}
const Icon = (props:Props)=>{
    return(
        <svg className="icon">
            <use xlinkHref={'#'+props.name}/>
        </svg>
    )
}

export default Icon;