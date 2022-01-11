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

const Hero = ({bgimg,heading,subheading,link,leftbuttonText, rightbuttonText, imgsrc}) => {
    return (
        <Wrap bg={bgimg}>
            <TextGroup>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}{link&&<a href="#">{link}</a>}</Subheading>
            </TextGroup>
            <Buttons>
            <ButtonGroup>
                <LeftButton>{leftbuttonText}</LeftButton>
                {rightbuttonText && <RightButton>{rightbuttonText}</RightButton>}
            
            </ButtonGroup>
            {imgsrc && <DownArrow src={imgsrc}/>}
            </Buttons>
            
        </Wrap>
    )
}

export default Hero
