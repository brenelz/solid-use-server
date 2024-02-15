import { cache, createAsync } from "@solidjs/router";
import * as fs from "fs";
import { createSignal } from "solid-js";

let fileText = "File Not Loaded";

const readFile = cache(async (path: string) => {
    'use server';

    fileText = fs.readFileSync(path, 'utf-8');

    return fileText;
}, 'read-file');

export function FileComponent(props: { path: string }) {
    const fileText = createAsync(() => readFile(props.path));
    const [count, setCount] = createSignal(0);

    return (
        <>
            <pre>{fileText()}</pre>
            <button onClick={() => setCount(count() + 1)}>Clicks {count()}</button>
        </>
    )
}