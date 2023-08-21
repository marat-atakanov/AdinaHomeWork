import React from 'react';

function SignInForm(props) {
    return (
        <div className={props.tab === 2 ? "" : "hidden"}>
            <div className="flex flex-col justify-between items-center">
                <input
                    type="text"
                    className="block mt-[30px] w-full h-[52px] rounded-md border-black border-2 py-[10px] pl-[10px] py-1.5 pl-7 pr-20 text-gray-900 text-2xl "
                    placeholder="Nickname"
                />
                <input
                    type="password"
                    className="block mt-[30px] w-full h-[52px] rounded-md border-black border-2 py-[10px] pl-[10px] py-1.5 pl-7 pr-20 text-gray-900 text-2xl "
                    placeholder="Password"
                />

                <div className="w-full gap-[10px] flex justify-start items-center mt-[30px]">
                    <input
                        id="checkInput"
                        type="checkbox"
                        className="w-[35px] h-[35px] checked:bg-black checked:border-2"
                    />
                    <label htmlFor="checkInput" className="text-[24px] text-[#878787] font-normal">Запомнить меня</label>
                </div>


                <button
                    className="block mt-[30px] w-full h-[52px] rounded-md bg-[#AD02E0] text-white text-xl font-sans uppercase"
                >
                    вход
                </button>
            </div>
        </div>
    );
}

export default SignInForm;