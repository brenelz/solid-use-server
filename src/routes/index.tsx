import { FileComponent } from "~/components/FileComponent";

export default function Index() {
    return (
        <>
            <h1>Hello World</h1>
            <FileComponent path="./tmp/solidHome.txt" />
        </>
    )
}