import React from 'react'
import {InputControl,InputLabel,Input} from './ContactElements'

const ContactInput = (props) => {
    const {label,width} = props
    return (
        <InputControl style={{width:`${width}`}}>
            <InputLabel>{label}</InputLabel>
            <Input></Input>
        </InputControl>
    )
}

export default ContactInput
