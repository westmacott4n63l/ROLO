import { ProductProps } from '@/mockData/products';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <Card variant='outlined' sx={{ borderRadius: '0.5em', height: '100%' }}>
      <CardMedia component='img' height={160} image={product.images.main} />
      <CardContent sx={{ padding: 1 }}>
        <Typography variant='body2' color='textSecondary'>
          {product.title}
        </Typography>
        <Typography variant='body1' color='primary'>
          R$ {product.price}
        </Typography>
      </CardContent>
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          padding: 0,
          paddingTop: 1,
          margin: 1,
          marginTop: 0,
          borderTop: '1px solid #7C7F85',
        }}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Avatar
            src={product.seller.avatar}
            alt={`${product.seller.name} avatar`}
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant='body2' sx={{ fontSize: 12 }}>
            {product.seller.name}
          </Typography>
        </Box>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='body2' sx={{ fontSize: 12 }}>
            {(() => {
              const now = new Date();
              const date = new Date(product.createdAt);
              const diffMs = now.getTime() - date.getTime();
              const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
              const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

              if (diffHours < 24) {
                return `${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
              } else if (diffDays === 1) {
                return 'ontem';
              } else {
                return `${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
              }
            })()}
          </Typography>
          <Typography variant='body2' sx={{ fontSize: 12 }}>
            {product.location.city} - {product.location.state}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
