import { FileComponent } from "~/components/FileComponent";

export default function Index() {
    return (
        <>
            <h1>Hello World</h1>
            <FileComponent path="./tmp/solidHome.txt">
                <FileComponent path="./tmp/solidHome2.txt">
                    <FileComponent path="./tmp/solidHome3.txt" />
                    <FileComponent path="./tmp/solidHome4.txt" />
                </FileComponent>
            </FileComponent>
        </>
    )
}