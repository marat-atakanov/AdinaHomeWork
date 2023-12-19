import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="posts" element={<PostsPage/>}/>
                    <Route path="form" element={<FormPage/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
