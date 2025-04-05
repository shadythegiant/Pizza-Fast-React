import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  {getAddress} from "../../services/apiGeocoding"; 
import { build } from "vite";
//


function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}




// using the mf middleware! 

// this fetch adress is going to be the action creator function called in our code

// the createAsyncThunk creates 3 additional action types ( fullfiled / rejected  / pending / )

export const fetchAddress = createAsyncThunk('user/fetchAddress' , async function() {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in

  // { returned position and address are the payloads of the fullfilled action state }
  return { position, address };
})

const initialState = {
  username: "sam", 
  status : "idle", 
  position : {}, 
  address : "", 
  error : "", 

}

const userSlice = createSlice(
  {
    name: 'user', 
    initialState : initialState, 
    reducers :  {
      updateName(state, action) {
        state.username = action.payload; 
      }
    }, 
    // specify the 3 action states 
    extraReducers : (builder) => builder.addCase(fetchAddress.pending, (state , action) => state.status = 'loading').addCase(fetchAddress.fulfilled, (state , action) => {
      state.status = "idle"; 
      state.address = action.payload.address; 
      state.position = action.payload; 


    }).addCase(fetchAddress.rejected, (state, action) => {
      state.status = "error"; 
      state.error = action.error.message; 
    })
  }
)

export const  {updateName} = userSlice.actions;
export default userSlice.reducer; 
