import { Box, styled } from '@mui/material';
import { useContext, useState, useEffectS } from 'react';
import { DataContext } from '../context/DataProvider';
import { useEffect } from 'react';


// Styleing
const Container = styled(Box)`
 height:49vh;
`
const Output = () => {
    const [source, setSource] = useState('');
    const { HTML, CSS, JS } = useContext(DataContext);
    const sourceCode = `
        <html>
            <body>${HTML}</body>
            <style>${CSS}</style>
            <script>${JS}</script>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(sourceCode);
        }, 1000)
        return () => clearTimeout(timeout);
    }, [HTML, CSS, JS])

    return (
        <Container>
            <iframe
                srcDoc={source}
                title="Output"
                sandbox='allow-scripts'
                frameBorder={0}
                height="100%"
                width="100%"

            />
        </Container>
    )
}
export default Output;