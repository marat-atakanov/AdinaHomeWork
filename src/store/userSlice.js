import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const postUser = createAsyncThunk(
    "postUser",
    async function (info, {dispatch, rejectWithValue}) {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(info)
            }

            const response = await fetch("http://68.183.214.2:8666/api/auth/signup/", options)

            const data = await response.json()
            console.log(data)




        } catch (e) {
        } finally {
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username: '',
        nickname: '',
        password: '',
        image_file: "/images/missingPhoto.png"
    },
    reducers: {
        changeUsernameAction: (state, action) => {
            state.username = action.payload
        },
        changeNicknameAction: (state, action) => {
            state.nickname = action.payload
        },
        changePasswordAction: (state, action) => {
            state.password = action.payload
        },
        changeImageAction: (state, action) => {
            state.image_file = action.payload
            console.log(state.image_file)
        }
    }
})

export const {changeUsernameAction, changeNicknameAction, changePasswordAction, changeImageAction} = userSlice.actions
export default userSlice.reducer