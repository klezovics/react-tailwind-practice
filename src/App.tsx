import {useState} from 'react'
import './App.css'
import {Box, MantineProvider, Paper, SimpleGrid, Stack, Text} from "@mantine/core";
import '@mantine/core/styles.css';

const BlackBox = ({children}) => {
    return <div className={"border border-black"}>{children}</div>
}

const MBlackBox = Paper.withProps({
    bd: "1px solid black"
});


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <MantineProvider>
                <div>
                    <h1>With Tailwind!!</h1>
                    <div className={"text-red-500"}>Hi</div>
                    <div className={"text-orange-100"}>Bye!</div>

                    <div className={"columns-3 border border-black"}>
                        <div className={"border border-red-500"}>1</div>
                        <div className={"border border-red-500"}>2</div>
                        <div className={"border border-red-500"}>3</div>
                        {/*<div className={"border border-red-500"}>4</div>*/}
                    </div>

                    <div>
                        <div className={"mb-1"}>
                            <BlackBox>1</BlackBox>
                        </div>
                        <BlackBox>2</BlackBox>
                        <BlackBox>3</BlackBox>
                    </div>
                </div>
                <div>
                    <h1>With Mantine UI!</h1>
                    <Text c="red.5">Hi</Text>
                    <Text c="orange.1">Bye!</Text>

                    <SimpleGrid cols={3}>
                        <Box bd={"1px solid black"}>1</Box>
                        <Box bd={"1px solid black"}>2</Box>
                        <Box bd={"1px solid black"}>3</Box>
                        <Box bd={"1px solid black"}>4</Box>
                    </SimpleGrid>

                    <Stack gap={"md"}>
                        <MBlackBox>1</MBlackBox>
                        <MBlackBox>2</MBlackBox>
                        <MBlackBox>3</MBlackBox>
                    </Stack>
                </div>
            </MantineProvider>
        </>
    )
}

export default App
