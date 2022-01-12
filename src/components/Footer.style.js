import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: center;
    min-height: 30px;
    margin-bottom: 1rem;
    width: 100%;
    li{
        list-style: none;
        padding: 0.5rem;
        font-size: 0.7rem;
        font-weight: 700;
        
        color: rgb(0,0,0,0.5);
        cursor: pointer;
    }
`;