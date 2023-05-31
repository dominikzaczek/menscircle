import Image from "next/image";

export default function HowItWorks(){
    return <div className="min-h-screen flex justify-center">
        <div className="container">
        <div className="row p-5">
            <h2 className="mt-10 mx-5 lg:mx-10"><span className="highlighted">HOW</span> IT WORKS</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{position: 'relative', objectFit: "contain", minHeight: '70vh'}}>
                <Image src="/static/images/circle.png" fill alt="Circle" style={{objectFit: "contain"}}/ >
            </div>
            <div className="col flex items-center gap-5 text-black p-10">
                <ul className="list-disc">
                    <li className="mb-5">We host weekly self-development circles on zoom, led by one of our professional facilitators.</li>
                    <li className="mb-5">Each week you practice <span className="highlighted">self-reflection</span>, <span className="highlighted">self-acceptance</span>  and  <span className="highlighted">active responsibility</span>. You get time to talk, and be heard, without interruption. Men talk about relationships, fatherhood, parents, work, friendships, sex, goals, failures etc. </li>
                    <li>You can then <span className="highlighted">get feedback</span> from the rest of the circle; to help you go deeper, get encouragement, or challenge you with accountability.</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
}