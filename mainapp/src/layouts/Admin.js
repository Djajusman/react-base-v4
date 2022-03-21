import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import pageViewGa from "../config/pageViewGa.js";

export default function Admin() {
  
  // views
  
  const Dashboard = lazy(() => import('../views/admin/Dashboard.js'));
  const Settings = lazy(() => import('../views/admin/Settings.js'));
  const Tables = lazy(() => import('../views/admin/Tables.js'));


  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/admin/dashboard" exact component={Dashboard} />
              <Route path="/admin/settings" exact component={pageViewGa(Settings)} />
              <Route path="/admin/tables" exact component={pageViewGa(Tables)} />
              <Redirect from="/admin" to="/admin/settings" />
            </Switch>
          </Suspense>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
