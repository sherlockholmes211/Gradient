import React from 'react'
import { HeroBg,HeroContent,HeroSeperator,HeroSmallText } from './HomeHeroElements'
const HomePageHero = () => {
    return (
        <HeroBg>
            <HeroContent>Design.Engineer.Optimise.</HeroContent>
            <HeroSeperator><img src="https://www.tangent.co.uk/static/images/zig-zag.svg"   alt="Green Zig Zag SVG icons" /></HeroSeperator>
            <HeroSmallText>We care about your product as much as you do</HeroSmallText>
        </HeroBg>
    )
}

export default HomePageHero
