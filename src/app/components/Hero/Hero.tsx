import Image from "next/image";
import styles from './Hero.module.scss';
export default function Hero(){
    return <div className={"h-screen flex items-center justify-center bgim"} style={{background: 'url(/static/images/trees.jpg)'}}>
        <div className="container flex flex-col items-center">
                <div className="w-50 h-50 relative" style={{width: '10em', height: '10em'}}>
                    <Image src="/static/images/logo_white_png.png" alt="Men's Circle Logo" fill style={{objectFit: "contain"}}/>
                </div>
                <h1 className="text-white">The Men&apos;s Self-Development Club</h1>
                <h3>Men challenging men to be better</h3>
        </div>
    </div>
}