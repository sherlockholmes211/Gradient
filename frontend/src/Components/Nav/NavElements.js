import styled from 'styled-components';
import {NavLink as  Link } from 'react-router-dom'

export const Nav = styled.div`
    background-color:#ffffff;
    padding:0.5rem 5rem;
    height:72px;
    display:flex;
    width:100vw;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    margin-bottom: 2px;
`

export const NavMenu = styled.div`
    display:flex;
    /* justify-content:space-between; */
    align-items:center;
    outline: none;
    border: none;
    /* -webkit-box-pack: end; */
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    color:black;
    //background-color:green;
    /* margin:0 20px;
    padding:4px; */
    padding-bottom: 5px;
    text-decoration: none;
    font-size: 0.83rem;
    /* margin-bottom: 10px; */
    font-weight: 500;
    margin-left: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(rgb(0, 199, 149) ,rgb(0, 199, 149)) var(--p, 0) 100% /var(--d, 0) 3px no-repeat;
    transition: 0.3s, background-position 0s 0.3s;
    &:hover {
        --d: 100%;
        --p: 100%;
    }
    /* &:hover{
        color:#008BDC;
        transition:all 0.3s ease-in-out;
    } */

`
export const NavBtn = styled.div`
    width:100vm;
    display:flex;
    justify-content:center;
    outline: none;

`

export const NavBtnlink = styled(Link)`
    border: 2px solid #008BDC;
    background-color:#f4f4f4;
    border-radius:2px;
    color:#008BDC;
    box-sizing: border-box;
    outline: none;
    font-weight:400;
    font-size:20px;
    padding:2px 17px;
    text-decoration: none;
    transition:all 0.3s ease-in-out;
    
    &:hover{
        background-color:#008BDC;
        color:white;
        transition:all 0.3s ease-in-out;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
        
    }

`