import { useEffect, useState } from "react";

export default function TypeWrite(props) {
    const [text, setText] = useState("");

    const escreverNaTela = (str, i = 0) => {
        if (i < str.length) {
            setText(str.slice(0, i + 1));
            setTimeout(() => escreverNaTela(str, i + 1), +props.time || 100);
        } 
    };

    useEffect(() => {
        setTimeout(() => {
            escreverNaTela(props.text)
        }, +props.isTime);
    }, []);

    return(
        <>{text}</>
    )

}