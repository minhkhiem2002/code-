import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BoxDevice = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('DWD6B8');
  const [nodeType, setNodeType] = useState('anchor');
  const [network, setNetwork] = useState('DEMO');
  const [uwb, setUwb] = useState('off');
  const [uwbFirmwareUpdate, setUwbFirmwareUpdate] = useState('');
  const [led, setLed] = useState('');
  const [ble, setBle] = useState('');
  const [initiator, setInitiator] = useState('');
  const [position, setPosition] = useState('');
  const [x, setX] = useState('0.00');
  const [y, setY] = useState('0.00');
  const [z, setZ] = useState('0.00');

  const [uwbFirmwareUpdateChecked, setUwbFirmwareUpdateChecked] = useState(false);
  const [ledChecked, setLedChecked] = useState(false);
  const [bleChecked, setBleChecked] = useState(false);
  const [initiatorChecked, setInitiatorChecked] = useState(false);

  const [customNetwork, setCustomNetwork] = useState('');

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleCustomNetworkChange = (event) => {
    setCustomNetwork(event.target.value);
  };
  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleSaveClick = () => {
    console.log('Name:', name);
    console.log('Node Type:', nodeType);
    console.log('Network:', network);
    console.log('UWB:', uwb);
    console.log('UWB Firmware Update Checked:', uwbFirmwareUpdateChecked);
    console.log('LED Checked:', ledChecked);
    console.log('BLE Checked:', bleChecked);
    console.log('Initiator Checked:', initiatorChecked);
    console.log('UWB Firmware Update:', uwbFirmwareUpdate);
    console.log('LED:', led);
    console.log('BLE:', ble);
    console.log('Initiator:', initiator);
    console.log('Position:', position);
    console.log('X:', x);
    console.log('Y:', y);
    console.log('Z:', z);
    setModalOpen(false);
  };

  const handleCancelClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box style={{ border: "1px solid gray", borderRadius: "20px", width: "80%" }}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <img
              src="https://nhaxinhplaza.com/wp-content/uploads/cac-thiet-bi-mang-thong-dung.jpg"
              alt="Avatar"
              style={{ width: '100%', borderRadius: '50%', marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="column" style={{ marginLeft: "10px" }}>
              <Grid item>
                <p style={{ fontSize: "18px", fontWeight: "600", marginTop: "5px" }}>{name}</p>
              </Grid>
              <Grid item>
                <p style={{ fontSize: "16px", fontWeight: "400", marginTop: "-10px" }}>Anchor: 1</p>
              </Grid>
              <Grid item>
                <p style={{ fontSize: "16px", fontWeight: "400", marginTop: "-10px" }}>Tags: 0</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <LocationOnIcon style={{ color: "blue", marginLeft: "20px", marginBottom: "10px" }} />
            </IconButton>
            <IconButton>
              <NetworkWifiIcon style={{ color: "purple",marginTop: "-5px", marginLeft: "20px"}} />
            </IconButton>
            <IconButton>
              <EditIcon style={{ color: "green", marginLeft: "20px", marginBottom: "10px" }} onClick={handleEditClick} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Modal open={isModalOpen} onClose={handleCancelClick}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style = {{marginTop: "-5px"}}
          />
          <p style = {{fontWeight: "600"}}>ID:   0xDECA183BD840D6B8      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     BLE:  C7:74:17:27:68:94</p>
   
          <TextField
            label="Node Type"
            fullWidth
            variant="outlined"
            margin="normal"
            select
            value={nodeType}
            onChange={(e) => setNodeType(e.target.value)}
            style = {{marginTop: "-5px"}}
          >
            <MenuItem value="anchor">Anchor</MenuItem>
            <MenuItem value="tag">Tag</MenuItem>
          </TextField>
          <div>
                <p style = {{fontWeight: "600"}}>NetWork</p>
                <Select
                    value={network}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="DEMO">DEMO</MenuItem>
                    <MenuItem value={customNetwork}>{customNetwork}</MenuItem>
                </Select>
                <span style = {{marginLeft: "20px"}}>Or</span>
                {network === 'DEMO' && (
                    <TextField
                    label="Create new network"
                    value={customNetwork}
                    onChange={handleCustomNetworkChange}
                    style = {{marginLeft: "20px"}}
                    />
                )}
                </div>
        <TextField
            label="UWB"
            fullWidth
            variant="outlined"
            margin="normal"
            select
            value={nodeType}
            onChange={(e) => setNodeType(e.target.value)}
            
          >
            <MenuItem value="anchor">active</MenuItem>
            <MenuItem value="off">off</MenuItem>
            <MenuItem value="tag">passive</MenuItem>
          </TextField>
          <FormControlLabel
            control={
              <Checkbox
                checked={uwbFirmwareUpdateChecked}
                onChange={() => setUwbFirmwareUpdateChecked(!uwbFirmwareUpdateChecked)}
              />
            }
            label="UWB FIRMWARE UPDATE"
          />
          <br/>
          <FormControlLabel
            control={
              <Checkbox
                checked={ledChecked}
                onChange={() => setLedChecked(!ledChecked)}
              />
            }
            label="LED"
          />
          <br/>
          <FormControlLabel
            control={
              <Checkbox
                checked={bleChecked}
                onChange={() => setBleChecked(!bleChecked)}
              />
            }
            label="BLE"
          />
          <br/>
          <FormControlLabel
            control={
              <Checkbox
                checked={initiatorChecked}
                onChange={() => setInitiatorChecked(!initiatorChecked)}
              />
            }
            label="INITIATOR"
          />
          <p style = {{fontWeight: "600"}}>POSITION (M)</p>
          <Grid container spacing={2} style = {{marginTop: "-30px"}}>
                <Grid item xs={4}>
                    <TextField
                    label="X"
                    variant="outlined"
                    margin="normal"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    label="Y"
                    variant="outlined"
                    margin="normal"
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    label="Z"
                    variant="outlined"
                    margin="normal"
                    value={z}
                    onChange={(e) => setZ(e.target.value)}
                    />
                </Grid>
                </Grid>
          <Button variant="contained" color="success" onClick={handleSaveClick} style={{ marginLeft: "360px" }}>
            Save
          </Button>
          <Button variant="contained" onClick={handleCancelClick} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default BoxDevice;
