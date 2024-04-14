import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Create } from "./pages/create/Create";
import { Profile } from "./pages/Profile";
import { CreateCollection } from "./pages/create/CreateCollection";
import { MintNFT } from "./pages/create/MintNFT";
import { Layout } from "./Layout";
import * as eth from "./components/ethers/ethService";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/create-collection"
                        element={<CreateCollection />}
                    />
                    <Route path="/mint-nft" element={<MintNFT />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
