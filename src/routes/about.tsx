import { FileComponent } from "~/components/FileComponent";

export default function About() {
    return (
        <>
            <h1>Hello World</h1>
            <FileComponent path="./tmp/solidHome.txt" />
        </>
    )
}