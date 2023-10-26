import { useState } from 'react';
import { Box, styled } from '@mui/material';
import FlakyIcon from '@mui/icons-material/Flaky';
import { Controlled as Codepen } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

// components
import '../App.css';

// Styleing
const Heading = styled(Box)`
    background:#1d1e22;
    display:flex;
    padding: 9px 12px;
`
const Header = styled(Box)`
display: flex;
background: #060606;
color: #AAAEBC;
justify-content: space-between;
font-weight:700;
`
const Container = styled(Box)`
flex-grow:1;
margin: 0px 5px;
border-left: 0.1px solid grey;
height : 49vh;
overflow: hidden;
`
const Editor = ({ heading, icon, colour, onChange, value }) => {
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    const [close, setClose] = useState(false);
    return (
        <Container style={close ? { flexGrow: 0 } : null}>
            <Header>
                <Heading>
                    <Box component="span" style={{
                        background: colour,
                        height: 20,
                        width: 20,
                        display: 'flex',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: '#000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <FlakyIcon
                    style={{ alignSelf: 'center' }}
                    onClick={() => setClose(prevState => !prevState)}
                />
            </Header>
            <Codepen className='controller-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: "true"
                }}
            />
        </Container>
    )
}

export default Editor;
