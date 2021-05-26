import React from 'react'
import {CardsWrapper,BoxContainer,CapabilityBox,CapImage,CapContent,CapContentTitle,CapContentDescription} from './StepCardsElements'

const StepCards = () => {
    return (
        <CardsWrapper>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "rgb(217, 248, 255)"}}>
                        <CapImage><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/74bFrBY7lEZagUcudEaod7/528cfcbc93e723cf7980108caa08f173/conversion-rate-optimisation-image-min.jpg"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Digital product design & engineering</CapContentTitle>
                            <CapContentDescription>Transform a legacy digital product or launch a brand new one.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "rgb(227, 255, 248)"}}>
                    {/* <img class="capability-box__image-background" alt="Consultancy &amp; research" src="//images.ctfassets.net/95zc810djopr/7CCpD6tFdAYpDhQPKP1Rxa/2ce484e0143bb55f17f01f4d25c0ecea/consultancy-and-research-image-min.jpg"> */}
                        <CapImage style={{clipPath: "circle(40% at 80% 70%)"}}><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/7CCpD6tFdAYpDhQPKP1Rxa/2ce484e0143bb55f17f01f4d25c0ecea/consultancy-and-research-image-min.jpg"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Consultancy & research</CapContentTitle>
                            <CapContentDescription>Get close to your customers, understand what they want, think & feel.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "background:#FFF7E3"}}>
                        <CapImage style={{clipPath: "polygon(100% 25%, 57% 5%, 72% 100%, 83% 100%, 100% 68%)"}}><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/4rMiGYTgIImGGvcBTO8oMS/bde31fc30b094b69854fbf3b34373168/conversion-rate-optimisation-image-min.png"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Digital product design & engineering</CapContentTitle>
                            <CapContentDescription>Transform a legacy digital product or launch a brand new one.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "#FFF1F2"}}>
                        <CapImage style={{clipPath: "polygon(73% 0%, 68% 8%, 73% 21%, 49% 61%, 58% 100%, 74% 100%, 87% 81%, 83% 65%, 100% 38%, 100% 0px)"}}><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/52rVGS8MJF3anEG1b4mAD6/d1054baf15939b270aac116af6a51afd/digital-brand-and-ui-image-min.jpg"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Digital product design & engineering</CapContentTitle>
                            <CapContentDescription>Transform a legacy digital product or launch a brand new one.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "#E3FFF8"}}>
                        <CapImage style={{clipPath: "polygon(58% 29%, 100% 8%, 100% 100%, 69% 100%)"}}><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/3wCe32SS2yZw6vGz1ZZ9D6/30250a19d8ea4963c6ed4d735fd7153a/support-and-maintenance-image.png"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Digital product design & engineering</CapContentTitle>
                            <CapContentDescription>Transform a legacy digital product or launch a brand new one.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
            <BoxContainer>
                <div style={{transform: "translateY(0%); opacity: 1;"}}>
                    <CapabilityBox style={{background: "#D9F8FF"}}>
                        <CapImage style={{clipPath: "circle(40% at 80% 70%)"}}><img style={{height:"100%",width:"100%",objectFit:"cover",verticalAlign:"middle"}} alt="Digital product design &amp; engineering" src="//images.ctfassets.net/95zc810djopr/3MvsQ9NTUc8iJPzhNExFvT/3977363cd12125422fe7de33063c5735/search-engine-optimisation-Image-min.png"/></CapImage>
                        <CapContent>
                            <CapContentTitle>Digital product design & engineering</CapContentTitle>
                            <CapContentDescription>Transform a legacy digital product or launch a brand new one.</CapContentDescription>
                        </CapContent>
                    </CapabilityBox>
                </div>
            </BoxContainer>
        </CardsWrapper>
    )
}

export default StepCards
