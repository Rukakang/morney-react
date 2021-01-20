import styled from "styled-components";

const TagsSection = styled.section`
    background: #FFFFFF;  
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    >ol{
    margin: 0 -12px;
      >li{
        background: #f5f5f5;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        margin: 8px 12px;
        font-size: 14px;
      }
    }
    >button{
      background: none;
      border: none;
      border-bottom: 1px solid #333;
      color: #666;
      padding: 2px 4px;
      margin-top: 8px;
    }
`;

export default TagsSection;