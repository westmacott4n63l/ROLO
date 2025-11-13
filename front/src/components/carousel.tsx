'use client';

import { Box } from '@mui/material';
import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode } from 'react';

export default function Carousel({ children }: { children?: ReactNode }) {
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
