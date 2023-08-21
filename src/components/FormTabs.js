import React from 'react';

function FormTabs(props) {


    return (
        <div>
            <button
                onClick={()=> props.changeTab(1)}
                className={props.tab === 2 ? "text-2xl" : "underline underline-offset-[7px] decoration-[5px] decoration-[#AD02E0] text-2xl"}
            >
                Вход
            </button>

            <button
                onClick={()=> props.changeTab(2)}
                className={props.tab === 1 ? "ml-[30px] text-2xl" : "ml-[30px] underline underline-offset-[7px] decoration-[5px] decoration-[#AD02E0] text-2xl"}
            >
                Регистрация
            </button>
            <div className="mt-[2px] w-full h-[2px] bg-gray-500"></div>
        </div>
    );
}

export default FormTabs;