import React from 'react';
import TranslationApp from './TranslationApp';
import Mon from './Mon';
import { Margin } from '@mui/icons-material';

function About() {
  return (
   <>
 
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="  bg" style={{width:'100%'}} id="#about">
    <footer className="text-white text-center text-lg-start ">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row mt-4">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Location</h5>
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height={200}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Gawt%20Village,Thaton+(University%20of%20Computer%20Studies(Thaton))&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              >
              &lt;a href="https://www.gps.ie/"&gt;gps tracker sport&lt;/a&gt;
              </iframe>
            </div>

         
          </div>
          {/*Grid column*/}
          {/*Grid column*/}

        
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

            <div className="form-outline form-white mb-4">
             
            <h5 className="text-uppercase mb-4" style={{textAlign:'left'}}>Contact Us</h5>
            
            </div>
            <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-home" />
                </span>
                <span className="ms-2">Gawt Village,UCSTT,Thaton</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-envelope" />
                </span>
                <span className="ms-2">thanhtunaung071@gmail.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-phone" />
                </span>
                <span className="ms-2">+959762117319</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-print" />
                </span>
                <span className="ms-2">+959677071561</span>
              </li>
            </ul>


          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{textAlign:'center'}}>Members</h5>
            <table className="table text-center text-white">
              <tbody className="font-weight-normal" style={{textAlign:'left'}}>
                <tr>
                  <td>Mg Than Htun Aung</td>
                  <td>Mg Thu Rein Min Htet</td>
                </tr>
                <tr>
                  <td>Mg Nyan Lin</td>
                  <td>Mg Sike Nyan</td>
                </tr>
                <tr>
                  <td>Mg Htet Myat Oo</td>
                  <td>Mg Htoo Khant Pyae</td>
                </tr>
                <tr>
                  <td>Ma Aye Chew Chew Khin</td>
                  <td>Ma Hnin Yu Yu Wai</td>
                </tr>
                <tr>
                  <td>Ma Hnin Hnin Nway</td>
                  <td>Ma Yamin Thu</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="">
          mon-eng translate.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  </div>
   </>
  );
}

export default About;
