import React from "react";
import { Certifications } from "../Components/UserSettingsComponents/Certifications";
import { EditUserInfo } from "../Components/UserSettingsComponents/EditUserInfo";

const UserSettings = () => {
  return (
    <div>
      <EditUserInfo />
      <Certifications />
    </div>
  );
};

export default UserSettings