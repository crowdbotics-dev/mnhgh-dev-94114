import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vfnm_list = createAsyncThunk(
  "vfnms/api_v1_vfnm_list",
  async payload => {
    const response = await apiService.api_v1_vfnm_list(payload)
    return response.data
  }
)
export const api_v1_vfnm_create = createAsyncThunk(
  "vfnms/api_v1_vfnm_create",
  async payload => {
    const response = await apiService.api_v1_vfnm_create(payload)
    return response.data
  }
)
export const api_v1_vfnm_retrieve = createAsyncThunk(
  "vfnms/api_v1_vfnm_retrieve",
  async payload => {
    const response = await apiService.api_v1_vfnm_retrieve(payload)
    return response.data
  }
)
export const api_v1_vfnm_update = createAsyncThunk(
  "vfnms/api_v1_vfnm_update",
  async payload => {
    const response = await apiService.api_v1_vfnm_update(payload)
    return response.data
  }
)
export const api_v1_vfnm_partial_update = createAsyncThunk(
  "vfnms/api_v1_vfnm_partial_update",
  async payload => {
    const response = await apiService.api_v1_vfnm_partial_update(payload)
    return response.data
  }
)
export const api_v1_vfnm_destroy = createAsyncThunk(
  "vfnms/api_v1_vfnm_destroy",
  async payload => {
    const response = await apiService.api_v1_vfnm_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vfnmsSlice = createSlice({
  name: "vfnms",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vfnm_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vfnm_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vfnm_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vfnm_list,
  api_v1_vfnm_create,
  api_v1_vfnm_retrieve,
  api_v1_vfnm_update,
  api_v1_vfnm_partial_update,
  api_v1_vfnm_destroy,
  slice: vfnmsSlice
}
