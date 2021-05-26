import React from 'react';
import { ButtonControl, ButtonGreen } from '../ClientsComponent/ClientsElement';
import ContactInput from './ContactInput';
import ContactArea from './ContactArea'
import {ContactControl,ContactTitle,ContactSep,ContactDesc,ContactFormControl,ContactGroup} from "./ContactElements";
const ContactUs = () => {
    return (
        <ContactControl>
            <ContactTitle>Why not say hello</ContactTitle>
            <ContactSep></ContactSep>
            <ContactDesc>Whatever your challenge, we would love to talk to you about it.</ContactDesc>
            <ContactFormControl>
                <ContactGroup>
                    <ContactInput label="name" width="45%"/>
                    <ContactInput label="company" width="45%"/>
                </ContactGroup>
                <ContactInput label="Email"></ContactInput>
                
                <ContactArea label="Tell us How We can Help"></ContactArea>
            </ContactFormControl>
            <ButtonControl>
                <ButtonGreen>Submit</ButtonGreen>
            </ButtonControl>
        </ContactControl>
    )
}

export default ContactUs
