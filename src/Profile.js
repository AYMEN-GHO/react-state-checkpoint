import React from "react";

export default function Profile(props) {
  return (
    <div>
      <h1>{props.fullName}</h1>
      <img src={props.imgSrc} id="challenge" />
      <h1>{props.bio}</h1>
      <h1>{props.profession}</h1>
    </div>
  );
}