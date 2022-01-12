import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => `url("/images/${props.bg}")`};
    background-color: #f5f5f5;
`;
export const TextGroup = styled.div`
    padding-top: 16vh;
    text-align: center;
`;
export const Heading = styled.h1`
    color: #3B3E43;
    font-size: 2.5rem;
    font-weight: 600;
`;
export const Subheading = styled.h2`
    font-size: 0.9rem;
    padding-top: 0.5rem;
    color: #333;
    font-weight: 500;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5vh;
    width: 100%;

`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 2.5rem;
    @media (max-width: 600px) {
        align-items: center;
        width: 100%;
        flex-direction: column;
    }

`;
export const LeftButton = styled.button`
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    border: none;
    border-radius: 3rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 600;
    width: 270px;
    margin-right: 1rem;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 400px;
        margin-bottom: 1rem;
    }
`;

export const RightButton = styled(LeftButton)`
color: #3b3e42;
background-color: rgba(255,255,255,0.5);
`;

export const DownArrow = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    fill: #3b3e42;
    margin-top: 1.5rem;
    animation: animateDown 1.5s infinite;
`;