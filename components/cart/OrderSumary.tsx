import { Grid, Typography } from '@mui/material'

export const OrderSumary = () => {
  return(
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>  
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3. Productos</Typography>
      </Grid> 
      
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid> 
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${207.000}`}</Typography>
      </Grid>  
      <Grid item xs={6}>
        <Typography>Iva (19%)</Typography>
      </Grid> 
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${39.330}`}</Typography>
      </Grid> 
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid> 
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{`$${240.300}`}</Typography>
      </Grid> 
    </Grid>
  )
}
