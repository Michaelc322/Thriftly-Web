
import styled from 'styled-components';



const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    height: 80px;
    width: 100vw;
    top: 0;
    overflow: hidden;
    z-index: 100;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);


    @media screen and (max-width: 768px){
        nav{
            display: none;
        }
    }

    
`

const NavLink = styled.a`

    text-align: center;
    font-family: 'Open Sans';
    text-decoration: none;
    margin-right:40px;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 600;
    position: relative;
    cursor: pointer;

    color: #D72638;
    transform: scale(1);
    transition: all 0.3s;
    
    &:hover{
        transform: scale(2);
        color: #ff7c89;
    }

    border-style: solid;
    background-color: #ffffff;
    border-width: 0px;
    border-color: #c9c9c9;
    border-radius: 10px;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /* Light shadow initially */



`


const LogoImage = styled.img`
    height: 100%;
`

const AppLogo = styled.img`
    height: 100%;
    border-radius: 20%;
`

const LogoNav = styled.a`
    display: flex;
    text-align: center;
    height: 60%;
    text-decoration: none;
    color: white;
`

const LogoTitle = styled.h1`
padding-left: 10px;
    line-height: 55px;
    font-family: Josefin Sans;
`

const MobileMenuDiv = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        position: fixed;
        z-index: 13;
        background-color: #121212;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        top: 80px;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
        left:100%;
        transition: all 0.5s ease;

        &.menuActive{
            left: 0%;
            transition: all 0.5s ease;
        }
    }

`

const MenuLink = styled.a`
    width: 100%;
    padding: 10px;
    text-align: center;
    font-family: Poppins;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    color: white;

    i{
        margin-right: 10px;
        margin-left: 5px;

    
    }

`

function Navbar(){


  return (
    <>
        <Nav>

            <LogoNav href ="/#home">
                <LogoImage src="/logos/redLogo.png"/>
            </LogoNav>

        
             {/* <nav>
                <NavLink href="/terms"><i className="fa-solid fa-calendar-days"></i>Terms of Use</NavLink>
                <NavLink href="/privacy-policy"><i className="fa-solid fa-calendar-days"></i>Privacy Policy</NavLink>
                <NavLink href="/support"><i className="fa-solid fa-calendar-days"></i>Support</NavLink>
                <NavLink href="/contact"><i className="fa-solid fa-folder-open"></i>Contact</NavLink>


            </nav> */}


              

        </Nav>

            
        
    </>
  )
}

export default Navbar