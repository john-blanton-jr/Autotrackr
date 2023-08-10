import React from 'react';
import Logo from "./assets/autotrackr.png"

function MainPage() {
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <a className="m-5 p-5 bg-dark bg-opacity-50 border rounded border-opacity-75" href="/"><img src={Logo} class="img-fluid"  width="500" alt="logo" /></a>
    </div>
  );
}

export default MainPage;
