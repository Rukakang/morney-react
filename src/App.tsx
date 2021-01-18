import React from 'react';
import styled from "styled-components";


const Button =styled.button`
color:red;
border: none;
background: green;
&:hover{
background: black;
}
`
function App() {
  return (
    <div>
      <Button>你好</Button>
    </div>
  );
}

export default App;
