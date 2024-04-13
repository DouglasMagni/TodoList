import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import React from "react";
import MyCalendar from "./CalendarPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Nav /> */}
      <div className="flex-1 ml-5">
        {/* <Outlet /> */}
        <MyCalendar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
