import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../components/reduxToolkit/slices';
import { Typography, Box, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items); // Retrieve cart items from Redux
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item)); // Dispatch removeFromCart action
  };

  return (
    <Box className="p-4 lg:p-10 bg-gray-100 min-h-screen mt-16">
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in the cart.</Typography>
      ) : (
        cartItems.map(item => (
          <Box key={item.id} sx={{ borderBottom: '1px solid #ccc', padding: '16px 0', display: 'flex', alignItems: 'center' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '16px' }}
            />
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">₹{item.price} x {item.quantity}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemove(item)} // Handle item removal
                sx={{ marginTop: '8px'  }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CartPage;


