import React from "react";


import CardSettings from "../../components/Cards/CardSettings.js";
import CardProfile from "../../components/Cards/CardProfile.js";
import FirebaseMessaging from "../../config/initFirebase.js";

export default function Settings() {

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <FirebaseMessaging />
          <CardProfile />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
