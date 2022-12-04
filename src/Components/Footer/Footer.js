import React from 'react';
import {Link} from 'react-router-dom';
import Icons from '../Icons/Icons';
import {AiFillHome} from "react-icons/ai";
import {FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import {IoLogoWhatsapp} from "react-icons/io";
import Logo from '../Logo/Logo';
import './styleFooter.css';

const Footer = () => {
  return (
    <footer className='text-center text-white'>
      <div className='container-fluid p-4 pb-0'>
        <div className='row'>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
            <Logo/>
            <div className='text-uppercase mt-4 mb-4font-weight-bold'>
              <a
                className='btn m-1 facebook'
                href="https://www.facebook.com/"
                ><Icons Icon={FaFacebookF} color={"white"} size={"20px"}/>
              </a>
              <a
                className='btn m-1 instagram'
                href="https://www.instagram.com/?hl=es-la"
                ><Icons Icon={FaInstagram} color={"white"} size={"20px"}/>
              </a>
              <a
                className='btn m-1 twitter'
                href="https://twitter.com/?lang=es"
                ><Icons Icon={FaTwitter} color={"white"} size={"20px"}/>
              </a>
            </div>
          </div>

          <hr className='w-100 clearfix d-md-none' />

          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 productos'>
            <h6 className='text-uppercase mb-4 font-weight-bold'>productos</h6>
            <p className="text-center">
              <Link to={`/ItemListContainer/mates`} className="text-white text-uppercase">mates</Link>
            </p>
            <p className="text-center">
              <Link to={`/ItemListContainer/bombillas`} className="text-white text-uppercase">bombillas</Link>
            </p>
            <p className="text-center">
              <Link to={`/ItemListContainer/materas`} className="text-white text-uppercase">materas</Link>
            </p>
            <p className="text-center">
              <Link to={`/ItemListContainer/termos`} className="text-white text-uppercase">termos</Link>
            </p>
          </div>

          <hr className='w-100 clearfix d-md-none' />

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 contactanos'>
            <h6 className='text-uppercase mb-4 font-weight-bold'>Ponete en contacto</h6>
            <a href="https://goo.gl/maps/c8xzezQK7bBeidzS6" className='d-flex justify-content-center justify-content-md-start'>
              <Icons Icon={AiFillHome} color={"white"} size={"20px"}/>
              <p className='ml-2 text-white'> Rivadavia 714 Mendoza, Argentina</p>
            </a>
            <a href="mailto:mateico@gmail.com" className='d-flex justify-content-center justify-content-md-start'>
              <Icons Icon={FaEnvelope} color={"white"}/>
              <p className='ml-2 text-white'>rincondelmate@gmail.com</p>
            </a>
            <a href="tel:+5493514895038" className='d-flex justify-content-center justify-content-md-start'>
              <Icons Icon={FaPhoneAlt} color={"white"}/>
              <p className='ml-2 text-white'>+54 9 261 3031323</p>
            </a>
            <a href="https://wa.me/5493513141363 " className='d-flex justify-content-center justify-content-md-start'>
              <Icons Icon={IoLogoWhatsapp} color={"white"} size={"19px"}/>
              <p className='ml-2 text-white'>+54 9 261 4041423</p>
            </a>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h6 className='text-uppercase mb-4 font-weight-bold'>medios de pago</h6>
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/visa@2x.png" alt="visa"/>
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mastercard@2x.png" alt="mastercard" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/amex@2x.png" alt="american express" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/banelco@2x.png" alt="banelco" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/tarjeta-naranja@2x.png" alt="naranja" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/tarjeta-shopping@2x.png" alt="tarjeta shopping" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mercadopago@2x.png" alt="mercado pago" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/pagofacil@2x.png" alt="pago facil" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/rapipago@2x.png" alt="rapipago" />
            <h6 className='text-uppercase mt-3 mb-4 font-weight-bold'>formas de envío</h6>
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png" alt="oca" />
            <img className='mediosPago' src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/correo-argentino@2x.png" alt="correo arg" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer