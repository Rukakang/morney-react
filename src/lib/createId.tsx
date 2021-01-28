let id = parseInt(window.localStorage.getItem('idMax')||'0');
const createId = ()=>{
    id++;
    window.localStorage.setItem('idMax',id.toString());
    return id;
}
export default createId;