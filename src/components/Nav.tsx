import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper =styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    background: white;
    >ul{
    display: flex;
    >li{
        width: 33.3333333%;
        text-align: center;
        >a{
            padding: 4px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            .icon{
              width: 24px;
              height: 24px;
            }
            &.selected{
              color: aqua;
              .icon{
                fill: aqua;
              }
            }
        }
        
        
    }
}
`;
const Nav = () =>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="label"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;