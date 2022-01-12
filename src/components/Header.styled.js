import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    width: 100%;
    z-index: 10;
    
`;
export const Logo = styled.img`
    width: 8rem;
    height: 1rem;
    margin-left: 5rem;
    @media (max-width: 768px) {
        margin-left: 1.5rem;
    }
`;
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    

`;
export const MenuItem = styled.p`
    text-align: center;
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    margin-right: 15px;
    @media (max-width: 1200px) {
        display: none;
    }

`;  

export const Sidebar = styled.div`
    display: none;
    position: fixed;
    top:0;
    right:0;
    width: 300px;
    height: 100vh;
    background: #fff;
    bottom:0;
    display: flex;
    flex-direction: column;
    transition: all 0.8s ease-in-out;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 100;
    li{
        padding: 12px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #333;
        cursor: pointer;
        margin-left: 40px;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`;
export const SidebarItem = styled(MenuItem)`
    display: none;
    @media (max-width: 1200px) {
        display: block;
    }
`;

export const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    margin-top: 30px;
    margin-bottom: 40px;
    cursor: pointer;

`;