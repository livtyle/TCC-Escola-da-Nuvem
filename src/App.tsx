import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Home from "./paginas/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./paginas/sobre/Sobre";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
			<BrowserRouter>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Navbar />
				<div style={{minHeight:'100vh'}}>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/sobre" element={<Sobre />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
	);
}
export default App;