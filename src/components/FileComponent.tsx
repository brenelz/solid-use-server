import * as fs from "fs";
import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";
let fileText = "File Not Loaded";

export function FileComponent(props: { path: string }) {
    if (isServer) {
        fileText = fs.readFileSync(props.path, 'utf-8')
    }
    const [count, setCount] = createSignal(0);

    return (
        <>
            <pre>{fileText}</pre>
            <button onClick={() => setCount(count() + 1)}>Clicks {count()}</button>
        </>
    )
}