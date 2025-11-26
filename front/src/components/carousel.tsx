'use client';

import { Box } from '@mui/material';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useState } from 'react';

export function BannerCarousel({ children }: { children?: ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <Box component='div' ref={emblaRef} sx={{ overflow: 'hidden' }}>
      <Box component='div' sx={{ display: 'flex' }}>
        {children}
      </Box>
    </Box>
  );
}

export function ProductCarousel({
  children,
  onSlideChange,
  images,
}: {
  children?: ReactNode;
  onSlideChange?: (index: number) => void;
  images?: string[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <Box>
      <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex' }}>{children}</Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          gap: 1,
          mt: 2,
        }}
      >
        {scrollSnaps.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              width: selectedIndex === index ? '1.5rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '0.25rem',
              backgroundColor:
                selectedIndex === index ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor:
                  selectedIndex === index ? 'primary.dark' : 'grey.600',
              },
            }}
          />
        ))}
      </Box>

      {images && (
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: 2,
            mt: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component='img'
              src={img}
              alt={`Preview ${index}`}
              onClick={() => scrollTo(index)}
              sx={{
                width: '4rem',
                height: '4rem',
                objectFit: 'cover',
                borderRadius: 1,
                cursor: 'pointer',
                border: '2px solid',
                borderColor:
                  selectedIndex === index ? 'primary.main' : 'transparent',
                opacity: selectedIndex === index ? 1 : 0.6,
                transition: 'all 0.2s ease',
                '&:hover': {
                  opacity: 1,
                  'primary.main': 'grey.600',
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
