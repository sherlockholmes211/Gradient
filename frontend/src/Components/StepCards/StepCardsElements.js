import styled from 'styled-components';


export const CardsWrapper = styled.div`
    /* 20px smaller, to fit the paddings on the sides */
    margin: 100px 0px;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;

`

export const BoxContainer = styled.div`
    width: 47.5%;
    margin-bottom: 3.125rem;
    &:nth-of-type(2n+1){
        margin-top: -12vh;
    }

`

export const CapabilityBox = styled.div`
    padding-top: calc(55.3719%);
    color: rgb(61, 82, 101);
    width: 100%;
    position: relative;
`

export const CapImage = styled.div`
    clip-path: polygon(58% 29%, 100% 8%, 100% 100%, 69% 100%);
    
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    &hover{
        transition: opacity 0.5s ease-in 0s, clip-path 1s ease 0s;
    }
`

export const CapContent = styled.div`
    overflow: hidden;
    padding: 6%;
    transition: opacity 0.5s ease-in 0s;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`

export const CapContentTitle = styled.div`
    margin-bottom: 1.5rem;
    width: 60%;
    text-transform: uppercase;
    font-family: "Mark W01 Bold", sans-serif;
    font-size: 0.75rem;
    line-height: 1.33333;
    letter-spacing: 0.125rem;
`

export const CapContentDescription = styled.div`
    width: 45%;
    font-size: 1.375rem;
    line-height: 1.54545;
    font-family: "EB Garamond", serif;
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.54545;
    letter-spacing: 0.02em;
    margin-bottom: 1.25rem;
`