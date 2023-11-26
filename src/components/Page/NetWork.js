
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const NetWork = () => {
  return (
    <>
    <Box style={{ border: "1px solid gray", borderRadius: "20px", width: "80%" }}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL0G4odnAAXghIZjKCONG-TYPCbkeNiZPIw&usqp=CAU"
            width = "100px"
            height = "120px"
            alt="Avatar"
            style={{ width: '100%', borderRadius: '50%', marginBottom: '10px' }}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" style = {{marginLeft: "10px"}}>
            <Grid item>
              <p style = {{fontSize: "18px", fontWeight: "600", marginTop: "5px", color: "green"}}>DEMO</p>
            </Grid>
            <Grid item>
              <p style = {{fontSize: "16px", fontWeight: "400", marginTop: "-10px"}}>NetWork ID: 0x9505</p>
            </Grid>
            <Grid item>
              <p style = {{fontSize: "16px", fontWeight: "400", marginTop: "-10px"}}>Anchor: 1</p>
            </Grid>
            <Grid item>
              <p style = {{fontSize: "16px", fontWeight: "400", marginTop: "-10px"}}>Tags: 0</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  )
};

export default NetWork;
