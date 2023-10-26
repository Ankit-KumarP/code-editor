import { AppBar, Toolbar, styled } from '@mui/material';
import logo from '../Images/logo.jpg';


// Styleing
const Container = styled(Toolbar)`
    background: #060606;
    height: 9vh;
    
`
const Header = () => {
    // CSS
    const imgStyle = {
        width: "50px",
        borderRadius: "50%",
        margin:'0px 20px 0px 0px'
    }

    return (
        <>
            <AppBar position="static">
                <Container >
                    <img src={logo} alt="logo" width={50} style={imgStyle} />
                    <h2 style={{fontFamily:  'code', wordSpacing: '5px'}}> Code Editor</h2>
                </Container>
            </AppBar>
        </>
    )
}
export default Header;