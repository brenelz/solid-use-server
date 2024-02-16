import { cache, createAsync } from "@solidjs/router";
import * as fs from "fs";
import { createSignal } from "solid-js";

let fileText = "File Not Loaded";

export const readFile = cache(async (path: string) => {
    'use server';

    fileText = fs.readFileSync(path, 'utf-8');

    await new Promise(r => setTimeout(r, 2000));

    return fileText;
}, 'read-file');

export function FileComponent(props: { path: string, children?: any }) {
    const fileText = createAsync(() => readFile(props.path));
    const [count, setCount] = createSignal(0);

    return (
        <>
            <pre>{fileText()}</pre>
            <button onClick={() => setCount(count() + 1)}>Clicks {count()}</button>
            {props.children}
        </>
    )
}