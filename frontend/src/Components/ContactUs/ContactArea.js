import React from 'react'
import {InputControl,InputLabel,ContactInputArea} from './ContactElements'

const ContactInput = (props) => {
    const {label,width} = props
    return (
        <InputControl style={{width:`${width}`}}>
            <InputLabel>{label}</InputLabel>
            <ContactInputArea></ContactInputArea>
        </InputControl>
    )
}

export default ContactInput
