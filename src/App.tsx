import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BlackBox = ({children}) => {
    return <div className={"border border-black"}>{children}</div>
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
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
        </>
    )
}

export default App
