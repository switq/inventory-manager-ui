import { useEffect, useState } from "react"

export function Botao({ cores }: { cores: string[] }) {

    const [corAtual, setCorAtual] = useState(0)

    useEffect(() => {
        console.log(corAtual)
    })

    const atualizaCor = () => {
        setCorAtual((corAtual + 1) % cores.length)
    }

    const style = {
        backgroundColor: cores[corAtual]
    }

    return (
        <button 
            onClick={atualizaCor} 
            style={style}
        >
            Botao
        </button>
    )
}