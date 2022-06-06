import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import GlobalStyles from "./GlobalStyles";


import LoginPage from "./Components/LoginPage";
import SingUpPage from "./Components/SingUpPage";
import SubscriptionsPage from "./Components/SubscriptionsPage";
import PlanInfosPage from "./Components/PlanInfosPage";
import HomePage from "./Components/HomePage";

export default function App() {
    const [userName, setUserName] = useState(null);
    const [token, setToken] = useState(null);
    const [data, setData] = useState(null);
    const [userInfos, setUserInfos] = useState('');
    const [membershipID, setMembershipID] = useState("");

    return (
        <>
            <UserContext.Provider value={{ 
                userName, setUserName,
                token, setToken, 
                data, setData,
                userInfos, setUserInfos, 
                membershipID, setMembershipID, 
                }}>
                    
                <BrowserRouter>
                    <GlobalStyles />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/sign-up" element={<SingUpPage />} />
                        <Route path="/subscriptions" element={<SubscriptionsPage />} />
                        <Route path="/subscriptions/:planId" element={<PlanInfosPage />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}