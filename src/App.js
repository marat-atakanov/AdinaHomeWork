import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import FormTabs from "./components/FormTabs";
import {useState} from "react";
import SignInForm from "./components/SignInForm";

function App() {
    const [tab, setTab] = useState(1);

    const changeTab = (num) => {
        setTab(num)
    }


    return (
        <div className="w-[603px] mt-20 mx-auto bg-white px-[52px] pt-[65px] pb-[50px] rounded-[30px]" >
            <FormTabs tab={tab} changeTab={changeTab}/>
            <RegistrationForm tab={tab}/>
            <SignInForm tab={tab}/>
        </div>
    );
}

export default App;
