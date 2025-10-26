import { useEffect, useRef } from "react";
import { Container } from "./styles";

interface Service {
  title: string;
  description: string;
}

interface HorizontalInfiniteCarouselProps {
  items: Service[];
  speed?: number;
  onItemClick?: (item: Service) => void;
}

const HorizontalInfiniteCarousel = ({ 
  items, 
  speed = 50,
  onItemClick
}: HorizontalInfiniteCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, speed);

    return () => clearInterval(intervalId);
  }, [speed]);

  const duplicatedItems = [...items, ...items];

  return (
    <Container ref={carouselRef}>
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div 
              className="service-card"
              onClick={() => onItemClick && onItemClick(item)}
              style={{ cursor: onItemClick ? "pointer" : "default" }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HorizontalInfiniteCarousel;

