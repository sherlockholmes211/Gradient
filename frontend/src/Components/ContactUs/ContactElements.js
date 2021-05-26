import styled from 'styled-components';

export const ContactControl = styled.div`
    margin: 100px 0;
    /* padding: 1.875rem 1rem 0px; */
    position: relative;
    z-index: 1;
    flex: 0 0 100%;
    padding-left: 10vw;
    max-width: 100%;
    width: 80%;
    min-height: 1px;
`

export const ContactTitle = styled.h2`
    color: rgb(61, 82, 101);
    font-family: "EB Garamond", serif;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: normal;
    line-height: 3.0625rem;
    margin-bottom: 1.1875rem;
`

export const ContactSep = styled.div`
    width: 2.8125rem;
    height: 0.25rem;
    background-color: rgb(0, 199, 149);
    margin-bottom: 1.5625rem;

`

export const ContactDesc = styled.div`
    font-family: "EB Garamond", serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin-bottom: 1.25rem;
    color: rgb(61, 82, 101);
`



export const ContactFormControl = styled.div`
    margin-top: 1.875rem;
`

export const ContactGroup = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

`

export const InputControl = styled.div`
    display: block;
    margin-bottom: 0px;
`

export const InputLabel = styled.div`
    font-family: "Mark W01 Bold", sans-serif;
    background-color: rgb(255, 255, 255);
    font-size: 0.75rem;
    text-transform: uppercase;
    display: inline-block;
    bottom: -1rem;
    left: 1rem;
    position: relative;
    padding: 0px 0.3125rem;
    width: fit-content;
    letter-spacing: 2px;
    margin-top: -1rem;
    z-index: 1;
`

export const Input = styled.input`
    height: 3.125rem;
    font-family: "EB Garamond", serif;
    font-size: 1.125rem;
    background-color: white;
    margin-top: 0.3125rem;
    width: 100%;
    /* height: 4rem; */
    padding: 0px 0.9375rem;
    border: 2px solid rgb(218, 218, 218);
`

export const ContactInputArea = styled.textarea`
    height: 14.5625rem;
    font-family: "EB Garamond", serif;
    font-size: 1.125rem;
    background-color: white;
    margin-top: 0.3125rem;
    width: 100%;
    /* height: 4rem; */
    padding: 0px 0.9375rem;
    border: 2px solid rgb(218, 218, 218);

`