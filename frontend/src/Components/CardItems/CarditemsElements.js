import styled from 'styled-components';

export const CardItemsWrapper = styled.div`
    position: relative;
    width: 70vw;
    max-width: 100vw;
    margin-right: 12.5vw;
    margin-left: 12.5vw;
    /* padding-right: 1.25rem;
    padding-left: 1.25rem; */
`

export const CardItemsHeader = styled.div`
    font-family: "Mark W01 Heavy", sans-serif;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 3.125rem;
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
    text-align: center;
`

export const CardItemsGrid = styled.div`
    display: flex;
    margin-bottom: 3.25rem;
    flex-wrap: wrap;
    /* width: 80vw; */
    /* margin:0 7vw;  */
`

export const CardControl = styled.div`
    display: flex;
    margin-bottom: 1.75rem;
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    /* &:nth-of-type(3n+1){
        padding-left: 4px;
        padding-right: 14px;
    } */
`

export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 19px 0px;
    color: inherit;
    text-decoration: none;
    margin: 2vh 2vw;
`

export const ImageControl = styled.div`
    height: 225px;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 1.125rem;
`

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    &:hover {
        transform: scale(1.5); /* (150% zoom)*/
    }
`

export const CardTitle = styled.p`
    color: rgb(61, 82, 101);
    font-family: "Mark W01 Bold", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.125rem;
    line-height: 1rem;
    margin-bottom: 0.5rem;
    padding: 0px 1.5rem;
    text-transform: uppercase;
`

export const CardDescription = styled.h3`
    flex: 1 1 auto;
    font-family: "Mark W01 Heavy", sans-serif;
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 0px;
    margin-bottom: 1.5rem;
    padding: 0px 1.5rem;
`

export const CardBy = styled.p`
    margin-top: 0px;
    margin-bottom: 1.5rem;
    padding: 0px 1.5rem;
`



