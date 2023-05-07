export default function BookACall() {
    return (
        <div className="bg-primary min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-10">
                    <div className="min-h-2/3 p-5 relative">
                        <img
                            src="/static/images/thumb-white.png"
                            width="100"
                            height="100"
                            style={{
                                position: 'absolute',
                                top: '-13%',
                                left: '80%',
                                zIndex: 0,
                            }}
                        />
                        <div className="bg-snow p-5" style={{ zIndex: 4 }}>
                            <h2 className="text-black">Try us out!</h2>
                            <p className="text-black">
                                Integer tincidunt volutpat sem id congue. Proin
                                hendrerit volutpat mi, vitae placerat arcu
                                luctus eu. Proin non feugiat ante, eu fringilla
                                purus. Cras quis rutrum sapien. Aenean eleifend
                                velit quis congue elementum. In consequat, justo
                                eu convallis vulputate, mauris enim auctor odio,
                                vitae aliquet metus massa ut felis. Nunc sed
                                finibus magna, at blandit libero. Sed aliquam,
                                risus nec scelerisque maximus, nulla ante tempor
                                nunc, ac imperdiet eros diam et neque. Phasellus
                                vestibulum consequat mauris, posuere consectetur
                                arcu consectetur at. Donec lacinia sollicitudin
                                magna, in maximus sapien gravida ut. Donec
                                bibendum, nulla in molestie euismod, libero
                                purus pulvinar sem, in hendrerit nulla felis in
                                nulla. Nulla sapien nulla, cursus eget faucibus
                                sit amet, lobortis in lorem. Morbi consequat
                                nunc vel consequat commodo.
                            </p>
                        </div>
                    </div>
                    <div className="min-h-2/3 p-5 relative">
                        <img
                            src="/static/images/phone-white.png"
                            width="100"
                            height="100"
                            style={{
                                position: 'absolute',
                                top: '-9%',
                                left: '80%',
                                zIndex: 0,
                            }}
                        />
                        <div className="bg-snow p-5">
                            <h2 className="text-black">
                                Still in doubt? Book a call!
                            </h2>
                            <p className="text-black mb-10">
                                Integer tincidunt volutpat sem id congue. Proin
                                hendrerit volutpat mi, vitae placerat arcu
                                luctus eu. Proin non feugiat ante, eu fringilla
                                purus. Cras quis rutrum sapien. Aenean eleifend
                                velit quis congue elementum. In consequat, justo
                                eu convallis vulputate, mauris enim auctor odio,
                                vitae aliquet metus massa ut felis. Nunc sed
                                finibus magna, at blandit libero. Sed aliquam,
                                risus nec scelerisque maximus, nulla ante tempor
                                nunc, ac imperdiet eros diam et neque. Phasellus
                                vestibulum consequat mauris, posuere consectetur
                                arcu consectetur at. Donec lacinia sollicitudin
                                magna, in maximus sapien gravida ut. Donec
                                bibendum, nulla in molestie euismod, libero
                                purus pulvinar sem, in hendrerit nulla felis in
                                nulla. Nulla sapien nulla, cursus eget faucibus
                                sit amet, lobortis in lorem. Morbi consequat
                                nunc vel consequat commodo.
                            </p>
                            <a className="button-outline-inverted">
                                Book a call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
