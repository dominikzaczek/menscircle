import Image from "next/image";

export default function ImproveYourStuff() {
    return (
        <div className="min-h-screen bg-primary p-5 flex justify-center">
          <div className="container">
            <h2 className="text-white mt-10 mx-5 lg:mx-10"><span className="highlighted-primary">Improve</span> your...</h2>
            <div className="lex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3">
                <div className="flex justify-center flex-col items-center gap-5 p-5">
                <Image
      src="/static/images/person.png"
      alt="Picture of the author"
      width={200}
      height={200}
    />
                    
                    <ul className="mt-3">
                   <li>👁️ Self-awareness</li> 
                   <li>🤓 Emotional intelligence</li> 
                   <li>💌 Self-care</li> 
                   <li>💪 Resilience</li> 
                   <li>💭 Self-esteem</li> 
                    </ul>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-5 p-5">
                    <div className="position-relative"><Image
      src="/static/images/couple.png"
      alt="Picture of the author"
      width={200}
      height={200}
    /></div>
                   <ul className="mt-5">
  <li>🖐 Boundaries</li>
  <li>💬 Listening & Feedback</li>
  <li>🤥 Authenticity</li>
  <li>🔒 Accountability</li>
  <li>🤝 Support network</li>
</ul>
</div>
<div className="flex justify-center flex-col items-center gap-5 p-5">
    <div className="position-relative"><Image
      src="/static/images/things.png"
      alt="Picture of the author"
      width={200}
      height={200}
    /></div>
<ul className="mt-3">
  <li>🏔️ Life Purpose</li>
  <li>🔍 Perspective</li>
  <li>💣 Triggers</li>
  <li>📈 Growth mindset</li>
  <li>🏖️ Environment</li>
</ul></div>
                </div>
                </div>
            </div>
            </div>
    )
}
