import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { usersDataType } from './type'

interface ReduxBodyType {
  UsersData: usersDataType[]
}

const initialState: ReduxBodyType = {
  UsersData: [],
}

const setUsersData = (
  state: ReduxBodyType,
  action: PayloadAction<usersDataType[]>,
) => {
  state.UsersData = action.payload
}

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setUsersData,
  },
})

export const { setUsersData: setUsersDataAction } = homeSlice.actions

export default homeSlice.reducer
