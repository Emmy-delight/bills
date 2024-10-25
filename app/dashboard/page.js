import Image from "next/image";
 

export default function Dashboard () {
    return (
        <main>
            <p>User dashboard</p>
            <p>Propose a UI design</p>
            <p>Build the UI</p>
            <p>Propose possible changes</p>

            <Image width={480} height={80} src ="/download.jpg" alt="lion"/>
        </main>
    )
}