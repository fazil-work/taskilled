import { Certifications } from "../Components/UserSettingsComponents/Certifications";
import { EditUserInfo } from "../Components/UserSettingsComponents/EditUserInfo";

export const UserSettings = () => {
  return (
    <div>
      <EditUserInfo />
      <Certifications />
    </div>
  );
};