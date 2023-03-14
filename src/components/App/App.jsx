import React, { useState, Suspense, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import ProtectRoutes from "../ProtectRoutes";
import HomePage from "../../pages/HomePage";
import SignUpForm from "../../pages/SignUpPage/SignUpPage";
import AddInspection from "../../pages/AddInspection";
import NewInspection from "../../pages/NewInspection";
import SearchResult from "../../pages/SearchResult";

//Defining style imports
// import "../../styles/ant-customs.less";
// import "../../styles/common.less";
// import "../../styles/ant-overrides.less";

// import PageNotFound from "../../pages/PageNotFound/PageNotFound";

//Configs
const { Content } = Layout;
const WHITE = "#FFFFFF";

// Let react-fetch-progressbar know what the original fetch is.
/*
Now override the fetch with progressBarFetch, so the ProgressBar
knows how many requests are currently active.
*/

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("login") || 'false');
  useEffect(() => {
    localStorage.setItem("login", isLoggedIn);
  }, [isLoggedIn]);



  return (
    <Fragment>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "100vh",
          maxHeight: "100vh",
          backgroundColor: WHITE,
        }}
      >
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={<ProtectRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
              >
                <Route index element={<HomePage />}/>
                <Route path="/add-inspection" element={<AddInspection />} />
                <Route path="/new-inspection" element={<NewInspection />} />
                <Route path="/result" element={<SearchResult />} />
              </Route>
              <Route path="/sign-up" element={<SignUpForm isLoggedIn={isLoggedIn}/>} exact />
              {/* <Route path="*" component={PageNotFound} /> */}
            </Routes>
          </Suspense>
        </Router>
      </Content>
    </Fragment>
  );
}

export default App;
