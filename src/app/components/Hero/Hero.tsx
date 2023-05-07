import Image from "next/image";

export default function Hero(){
    return <div className="h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 xl:gap-x-9">
        <div className="flex justify-center flex-col p-5 w-100 xl:w-3/4"><h1>We are men. Lipsum.</h1>
        <p style={{marginBottom: "1em"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis finibus orci, non auctor est. Nullam sollicitudin nec turpis sit amet vehicula. Sed vitae felis eget odio egestas ullamcorper ac nec neque. Curabitur scelerisque, lacus id placerat placerat, arcu lorem condimentum nunc, non commodo libero sapien vitae urna. </p>
        <div><a className="button-outline " href="/">Try for free</a></div>
        </div>
        <div className="relative hidden xl:block" style={{height: "80vh", objectFit: "contain"}}><Image src="/static/images/hero.jpeg" fill={true} /></div>
        </div>
    </div>
}