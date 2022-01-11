import React from 'react'
import {
    Wrap,
    TextGroup,
    Heading,
    Subheading,
    ButtonGroup,
    LeftButton,
    RightButton,
    DownArrow,
    Buttons
} from './Hero.styled'
import Fade from 'react-reveal/Fade';
const Hero = ({bgimg,heading,subheading,link,leftbuttonText, rightbuttonText, imgsrc}) => {
    return (
        <Wrap bg={bgimg}>
            <Fade bottom>
            <TextGroup>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}{link&&<a href="#">{link}</a>}</Subheading>
            </TextGroup>
            </Fade>
            <Buttons>
            
            <ButtonGroup>
            <Fade left duration={3000}>
                <LeftButton>{leftbuttonText}</LeftButton>
                </Fade>
                <Fade right duration={3000}>
                {rightbuttonText && <RightButton>{rightbuttonText}</RightButton>}
                </Fade>
            </ButtonGroup>
            
            {imgsrc && <DownArrow src={imgsrc}/>}
            </Buttons>
            
        </Wrap>
    )
}

export default Hero
