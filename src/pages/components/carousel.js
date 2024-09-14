import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { ScrollShadow } from "@nextui-org/react";

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 1, stopOnFocusIn: false }),
    ])
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        setIsPlaying(autoScroll.isPlaying())
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])

    if (!Array.isArray(slides)) {
        return <div>No slides provided</div>;
    }

    return (
        <ScrollShadow hideScrollBar className="max-w-[1200px] m-auto" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom">
                {slides.map((src, index) => (
                    <div className="translate [transform:translate3d(0,0,0)] flex-[0_0_75%] md:flex-[0_0_25%] min-w-0 pl-1rem" key={index}>
                        <div className="flex justify-center items-center select-none">
                            <Image
                                key={index}
                                src={src}
                                width={100}
                                height={100}
                                className="w-auto object-cover"
                                alt={`scrolling-image-${index}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ScrollShadow>
    )
}

export default EmblaCarousel