export default function Details() {
    return (
        <main className="bg-snow">
            <div>
                <div className="container-fluid mx-auto min-h-screen flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2">
                        {/* <div className="flex justify-center" style={{height: 300}}><img src="/static/images/menhead.png" style={{ transform: "scaleX(-1)"}}/></div> */}
                        <div className="flex items-center overflow-hidden h-screen hidden md:flex">
                            <img
                                src="/static/images/menhead.png"
                                className="relative"
                                style={{ transform: 'scaleX(-1)', left: '50%' }}
                            />
                        </div>

                        <div className="bg-primary p-3 h-screen w-100 p-10 col-span-2 xl:col-span-1">
                            <h2>Details</h2>
                            <p>
                                Fusce eu molestie diam. Aliquam pulvinar ornare
                                massa. Donec quis ante velit. Vivamus commodo at
                                ligula non ornare. Aliquam erat volutpat. Sed
                                mattis eleifend tellus eu congue. Praesent
                                vulputate pretium magna, nec fermentum lorem
                                dictum eu. Sed bibendum tellus sit amet ipsum
                                finibus, sed ornare dui ullamcorper. Donec
                                facilisis neque vel orci interdum viverra.
                                Suspendisse eget vestibulum turpis. Cras id arcu
                                sapien. Duis sit amet viverra eros. Nulla tempor
                                nisl eu orci aliquet tincidunt. Morbi maximus,
                                lacus non congue consectetur, justo sapien
                                cursus felis, quis mattis turpis purus nec urna.
                            </p>

                            <div className="flex justify-center mt-5 overflow-y-scroll">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/bHsQY8f3Ya8?controls=0"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
