import React , {useState}from 'react'

import {
    Container,
Logo,
Menu,
MenuItem,
Sidebar,
SidebarItem,
CloseWrapper
} from './Header.styled'

const Header = () => {
    const [sidebarSTATUS, setSidebarSTATUS] = useState(false);
    return (
        <Container>
            <Logo src="/images/logo.svg"/>
            <Menu>
                <MenuItem>Model S</MenuItem>
                <MenuItem>Model 3</MenuItem>
                <MenuItem>Model X</MenuItem>
                <MenuItem>Model Y</MenuItem>
                <MenuItem>Solar Roof</MenuItem>
                <MenuItem>Solar Panels</MenuItem>
            </Menu>
            <Menu>
                <MenuItem>Shop</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem onClick={() => setSidebarSTATUS(true)}>Menu</MenuItem>
                
            </Menu>
            <Menu>
                
                <SidebarItem onClick={() => setSidebarSTATUS(true)}>Menu</SidebarItem>
                
            </Menu>
            
            <Sidebar open={sidebarSTATUS}>
                <CloseWrapper onClick={() => setSidebarSTATUS(false)}>
                    <img src="/images/close.png" alt="menu"width="15" height="15" />
                </CloseWrapper>
                
                
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relations</a></li>
                
                
                
                
            </Sidebar>
            
        </Container>
    )
}

export default Header
