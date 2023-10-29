import React, { useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/authActions";
import ProfileOptions from "./ProfileOptions";

const ProfileSetup = () => {
  const user_profile = useSelector((state) => state.auth.user_profile);
  const userid = useSelector((state) => state.auth.user._id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(userid));
  }, []);

  return (
    <div>
      <Header
        heading={"Profile Setup"}
        subtitle={"Please enter your information."}
      />
      {user_profile !== null ? <ProfileOptions /> : <Form />}
    </div>
  );
};

export default ProfileSetup;
