import { Box, styled } from '@mui/material';
import { useContext } from 'react';
// components
import Editor from '../components/Editor';
import { DataContext } from '../context/DataProvider';

// Styeing
const Container = styled(Box)`
display: flex;
justify-content: space-between;
background: #060606;
padding: 20px 5px;
border: 0.2px solid grey;
`
const Codearea = () => {
    const { HTML, setHTML, CSS, setCSS, JS, setJS, onChange } = useContext(DataContext);
    return (
        <Container>
            <Editor heading="HTML" icon="/" colour="red" onChange={setHTML}
                style ={{border: '0.2px solid grey'}}
                value={HTML}
            />
            <Editor heading="CSS" icon="*" colour="blue" onChange={setCSS}
                value={CSS}
            />
            <Editor heading="JavaScript" icon="{ }" colour="yellow" onChange={setJS}
                value={JS}
            />
        </Container>
    )
}

export default Codearea;