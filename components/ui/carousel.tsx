
"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode[]
  options?: {
    loop?: boolean
    autoplay?: boolean
    delay?: number
  }
}

const Carousel: React.FC<CarouselProps> = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: options?.loop ?? true }, [
    Autoplay({ delay: options?.delay ?? 3000, stopOnInteraction: false, playOnInit: options?.autoplay ?? true }),
  ])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    onInit(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("reInit", onInit)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === selectedIndex ? "bg-purple-500" : "bg-gray-600"}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
