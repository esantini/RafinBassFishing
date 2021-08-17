import { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from 'next/image';
import { Thumb } from "./EmblaCarouselThumb";

export default function Carousel({ images, selected = 0, setSelected }) {
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false, startIndex: selected });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const scrollN = n => {
    setSelected(i => i + n);
    if (embla) {
      embla.scrollTo(selected + n);
    }
  }

  const scrollNext = () => {
    setSelected(i => {
      return i + 1;
    });
    if (embla) {
      // embla.scrollTo(i + 1);
      embla.scrollNext();
    }
  }

  const keyEvent = useCallback(({ key }) => {
    if (key === "ArrowRight") scrollNext();
    else if (key === "ArrowLeft") scrollN(-1);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyEvent);
    return () => {
      window.removeEventListener("keydown", keyEvent);
    }
  }, [keyEvent]);

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelected(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelected]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div id="carousel">
      <div className="embla embla--main">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {images.map((img) => (
              <div className="embla__slide" key={img.src}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={img.src}
                    alt="Fishing bass at Oviachic with Rafin"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {images.map((img, i) => (
              <Thumb
                onClick={() => onThumbClick(i)}
                selected={i === selected}
                image={img}
                key={img.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
