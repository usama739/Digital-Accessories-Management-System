import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-secondary text-center text-white">
               {/* Grid container  */}
              <div className="container p-4 pb-0">
                  {/* Section: Social media  */}
                  <section className="mb-4">
                       {/* Facebook  */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#3b5998' }}
                          href="#!"
                          role="button"
                      ><FacebookIcon/></a>

                       {/* Twitter  */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#55acee' }}
                          href="#!"
                          role="button"
                      ><TwitterIcon/></a>

                       {/* Google */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#dd4b39' }}
                          href="#!"
                          role="button"
                      ><GoogleIcon/></a>

                      {/* Instagram */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#ac2bac' }}
                          href="#!"
                          role="button"
                      ><InstagramIcon/></a>

                     {/* Linkedin  */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#0082ca' }}
                          href="#!"
                          role="button"
                      ><LinkedInIcon/></a>
                      {/* Github  */}
                      <a
                          className="btn text-white btn-floating m-1"
                          style={{ backgroundColor: '#333333' }}
                          href="#!"
                          role="button"
                      ><GitHubIcon/></a>
                  </section>
              </div>

               {/* Copyright  */}
              <div className="text-center p-3 bg-dark">
                  © 2023 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/"> Digitalaccessoriesmanagement.com</a>
              </div>
          </footer>

    </div>
  )
}

export default Footer