"use client"

import App from "@/app/App.jsx"
import Login from "@/app/Login.jsx"
import { BrowserRouter, Route, Routes } from "react-router"

export default function Home(){
return(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element = {<Login/>}/>
      <Route path="/App" element={<App/>} />
      
    </Routes>
  </BrowserRouter>
)
}