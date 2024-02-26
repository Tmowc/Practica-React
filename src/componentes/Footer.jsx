import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/Footer.css'
import Linkedin from '../assets/3138898_square_blue_work_linkedin_job_shadow_linked.png';
import Facebook from '../assets/3138895_shadow_blue_social_facebook_book_media_f.png';
import X from '../assets/3138902_twitter_shadow_social_tweet_media_square_blue.png';
import Youtube from '../assets/3138903_play_red_you_shadow_youtube_tube_square.png';
import addr from '../assets/icons8-home-address-64.png';
import Tel from '../assets/icons8-phone-48.png';


export const Footer = () => {
  return (
    <div className='mt-4 p-3 rounded contenedorFooter'>
        <div className='row'>
            <div className='col-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className="social">
                        <a className='px-2' href=""><img src={Linkedin} alt="icono de Linkedin" className="img-fluid"/></a>
                        <a className='px-2' href=""><img src={Facebook} alt="icono de facebook" className="img-fluid"/></a>
                        <a className='px-2' href=""><img src={X} alt="ícono de X" className="img-fluid"/></a>
                        <a className='px-2' href=""><img src={Youtube} alt="ícono de Youtube" className="img-fluid"/></a>
                    </div> 

                    <div className="contacto-container">
                            <div className="enlaces ">
                                <p>Enlaces útiles</p>
                                <ul>
                                    <li>
                                        <a href="">Su cuenta</a>
                                    </li>
                                        <li>
                                         <a href="">Ayuda</a>
                                        </li>
                                </ul>
                       
                            </div>

                                <div className="contacto px-5">

                                    <p>Contacto</p>
                                        <ul>
                                            <li>
                                                <a href=""><img src={addr} alt="Icono de domicilio"/>Barcelona, C 1001, ES</a>
                                            </li>

                                            <li>
                                                <a href=""><img src={Tel} alt="ícono de teléfono"/>+34 93 902 056</a>
                                            </li>
                                        </ul>
                                </div>

                    </div>
            </div>
        </div>
                     
    </div>
  )
}
