import React from 'react'
import { CardControl, CardBy, CardDescription,CardBody,ImageControl,Image,CardTitle } from './CarditemsElements'

const Card = (props) => {
    const {url,title,desc} = props;
    return (
        <CardControl>
            <CardBody>
                <ImageControl>
                    <Image style={{backgroundImage:`url("${url}")`}}></Image>
                </ImageControl>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
                <CardBy>By Nadine Clarke & Steve Clark</CardBy>
            </CardBody>
        </CardControl>
    )
}

export default Card
