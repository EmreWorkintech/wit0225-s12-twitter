import React from "react";

function Feed({ loggedUser }) {
  return <div>Feed - {loggedUser.email}</div>;
}

export default Feed;
