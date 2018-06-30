import React from 'react';

const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.profileImageUrl} />
    <UserName name={user.name} screenName={user.screenName} />
  </div>
);

Profile.propTypes = {
  user: ReadableStream.PropTypes.object,
};

export default Profile
