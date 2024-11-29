import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../components/reduxToolkit/slices'; // Import the action
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addToCart action
    navigate("/cardItemPage");
  };

  return (
    <Box className="p-4 lg:p-10 bg-gray-100 min-h-screen flex justify-center items-center mt-[80px]">
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          boxShadow: 1,
          borderRadius: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            width: { xs: '100%', md: '40%' },
            objectFit: 'contain',
            height: { xs: '250px', md: '300px' },
            borderRadius: { xs: '8px 8px 0 0', md: '8px 0 0 8px' },
            marginTop: '16px',  // Adjust this if needed
          }}
        />

        {/* Product Details Section */}
        <CardContent sx={{ padding: '24px', flex: '1' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="h4" sx={{ color: 'red', fontWeight: 'bold' }}>
            ₹{product.price}
          </Typography>

          <Typography
            variant="body2"
            sx={{ textDecoration: 'line-through', color: 'gray', marginBottom: '8px' }}
          >
            ₹{(product.price * 1.5).toFixed(2)}
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'green', marginBottom: '16px' }}>
            30% off
          </Typography>

          <Typography variant="h6" gutterBottom>
            Available Offers
          </Typography>
          <ul style={{ paddingLeft: '20px' }}>
            <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
            <li>10% off up to ₹1,500 on Axis Bank Credit Card</li>
            <li>10% off up to ₹750 on HDFC Bank Credit Card EMI</li>
          </ul>

          <Typography variant="body2" sx={{ color: 'gray', marginTop: '16px' }}>
            Delivery by 7 Dec, Saturday | Free
          </Typography>

          {/* Add to Cart Button Section */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{
                padding: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                maxWidth: '200px',
              }}
              onClick={handleAddToCart} // Handle Add to Cart
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailsPage;




