import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    changeImageAction,
    changeNicknameAction,
    changePasswordAction,
    changeUsernameAction,
    postUser
} from "../store/userSlice";


function RegistrationForm(props) {
    const dispatch = useDispatch();
    const {image_file, username, nickname, password} = useSelector(state => state.userReducer)

    function uploadImage(e) {
        dispatch(changeImageAction(URL.createObjectURL(e.target.files[0])));
    }

    const changeUsername = (e) => {
        dispatch(changeUsernameAction(e.target.value))
    }
    const changeNickname = (e) => {
        dispatch(changeNicknameAction(e.target.value))
    }
    const changePassword = (e) => {
        dispatch(changePasswordAction(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postUser({
            username: username,
            nickname: nickname,
            password: password,
            image_file: image_file
        }))
    }


    return (
        <div className={props.tab === 1 ? "" : "hidden"}>

            <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center ">
                <img src={image_file} alt="" className="mt-[40px] w-[181px] h-[181px] rounded-full"/>

                <label htmlFor="file-upload" className="mt-[21px] text-[16px] text-black uppercase">добавить фото</label>
                <input id="file-upload" className="hidden" type="file" onChange={uploadImage} name='image'/>

                <input
                    type="text"
                    className="block mt-[40px] w-full h-[52px] rounded-md border-black border-2 py-[10px] pl-[10px] pr-20 text-gray-900 text-2xl "
                    placeholder="Username"
                    name='username'
                    onChange={changeUsername}
                />
                <input
                    type="text"
                    className="block mt-[30px] w-full h-[52px] rounded-md border-black border-2 py-[10px] pl-[10px] py-1.5 pl-7 pr-20 text-gray-900 text-2xl "
                    placeholder="Nickname"
                    name='nickname'
                    onChange={changeNickname}
                />
                <input
                    type="password"
                    className="block mt-[30px] w-full h-[52px] rounded-md border-black border-2 py-[10px] pl-[10px] py-1.5 pl-7 pr-20 text-gray-900 text-2xl "
                    placeholder="Password"
                    name='password'
                    onChange={changePassword}
                />
                <button
                    type="submit"
                    className="block mt-[30px] w-full h-[52px] rounded-md bg-[#AD02E0] text-white text-xl font-sans uppercase"
                >
                    регистрация
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;