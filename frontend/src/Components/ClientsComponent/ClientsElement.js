import styled from 'styled-components';


export const ClientsWrapper = styled.div`
    margin: 100px 0px;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
`

export const ClientsContent = styled.div`
    padding-top: 6.75rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`

export const ClientsTag = styled.div`
    padding-bottom: 3.5rem;
    animation: 0s ease 0s 1 normal none running none;
    opacity: 1;
    text-transform: uppercase;
    font-family: "Mark W01 Bold", sans-serif;
    font-size: 1rem;
    line-height: 1.33333;
    letter-spacing: 0.125rem;
`

export const ClientsText = styled.div`
    /* font-size: 2.25rem; */
    font-size: 1.5rem;
    line-height: 1.41667;
    font-weight: 300;
    letter-spacing: -0.3px;
    color: rgb(61, 82, 101);
    text-align: center;
    max-width: 100%;
    margin: 0px 0px 3.25rem;
    font-family: "EB Garamond", sans-serif;
`

export const ButtonControl = styled.div`
    /* font-size: 2.25rem; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:5rem;
`

export const ClientsLogos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    margin: 0px -0.5rem;
    padding: 0px;
    list-style: none;
    padding-left: 15vw;
`

export const ClientsLogo = styled.li`

`

export const ButtonGreen = styled.button`
    color: rgb(17, 18, 40);
    border: 2px solid rgb(0, 199, 149);
    cursor: pointer;
    
    font-family: "Mark W01 Bold", sans-serif;
    font-size: 0.75rem;
    line-height: 2.25rem;
    letter-spacing: 0.125rem;
    padding: 0.625rem 2rem;
    text-transform: uppercase;
    transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    &:hover{
        background-color: rgb(0, 199, 149);
        transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }
`

