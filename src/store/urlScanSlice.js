import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 180000,
});

export const scanUrl = createAsyncThunk(
  "urlReportStore/scanUrl",
  async function (url, { rejectWithValue }) {
    try {
      const { data } = await instance.post("/scan", {
        url_value: url,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const urlScanSlice = createSlice({
  name: "urlReportStore",
  initialState: {
    lastUrl: "",
    lastUrlScanResult: "",
    loadingState: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(scanUrl.pending, (state) => {
      state.loadingState = true;
    });
    builder.addCase(scanUrl.fulfilled, (state, action) => {
      state.lastUrl = action.payload.checkedUrl;
      state.lastUrlScanResult = action.payload.result;
      state.loadingState = false;
    });
    builder.addCase(scanUrl.rejected, (state, action) => {
      console.error(action.error.message);
      alert("Something went wrong!");
      state.loadingState = false;
    });
  },
});

export const {} = urlScanSlice.actions;
export default urlScanSlice.reducer;
