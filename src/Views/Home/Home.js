import React from 'react';
import Icons from '../../Components/Icons/Icons';
import { FaTruck, FaLock } from 'react-icons/fa';
import { BsCreditCardFill } from "react-icons/bs";
import Category from '../../Components/Category/Category';
import './styleHome.css';

const Home = () => {
  return (
    <>
      <section className='home_portada'>
        <div className='portada_central'>
          <img src="https://media.istockphoto.com/photos/mate-picture-id1253557686?b=1&k=20&m=1253557686&s=170667a&w=0&h=re7DBOXdBTKMhiLlt-UCfVrcByXvufjtwp_BSytTx9k=" alt="portada1" />
          <div className='portada_text'>
            <h4 className='text-uppercase font-weight'>la magia de tomar mate</h4>
          </div>
        </div>
      </section>

      <section className='home_bloques container-fluid'>
        <div className='row bloques_info' >
          <div className='bloque_cont col-lg-4 mx-auto text-center text-uppercase'>
            <Icons Icon={FaTruck} color={"white"} size={"30px"} />
            <h5 className='font-weight-bold pt-2'>envíos a todo el país</h5>
            <p className='text-center m-0'>comprá sin salir de tu casa</p>
          </div>
          <div className='bloque_cont bloque col-lg-4 text-center text-uppercase'>
            <Icons Icon={BsCreditCardFill} color={"white"} size={"30px"} />
            <h5 className='font-weight-bold pt-2'>formas de pago</h5>
            <p className='text-center m-0'>tarjetas de crédito o efectivo</p>
          </div>
          <div className='bloque_cont bloque col-lg-4 text-center text-uppercase'>
            <Icons Icon={FaLock} color={"white"} size={"25px"} />
            <h5 className='font-weight-bold pt-2'>compra segura</h5>
            <p className='text-center m-0'>protegemos tus datos</p>
          </div>
        </div>
      </section>

      <section className='home_categorias container-fluid'>
        <h3 className='home_title'>
          <b></b>
          <span>categorías</span>
          <b></b>
        </h3>
        <div className='container-fluid'>
          <div className='row'>
            <Category imagen={'https://matesibarra.com/wp-content/uploads/2021/06/2doCatalogoAbril32-scaled-247x296.jpg'} CategoryId={'mates'} />
            <Category imagen={'https://matesibarra.com/wp-content/uploads/2021/06/2doCatalogoAbril60-247x296.jpg'} CategoryId={'bombillas'} />
            <Category imagen={'https://matesibarra.com/wp-content/uploads/2021/06/Catalogo-Abril15-247x296.jpg'} CategoryId={'materas'} />
            <Category imagen={'https://matesibarra.com/wp-content/uploads/2021/06/doite-termo-stanley-verde-nuevo-2020-46721-02-247x296.jpg'} CategoryId={'termos'} />
          </div>
        </div>
      </section>

      <section className='imagen-grid container-fluid'>
        <div className='imagen_cont'>
          <img src="https://i.pinimg.com/originals/91/76/a3/9176a32e1f0c07f2d16efdd61ae13786.jpg" alt="" />
        </div>
        <div className='imagen_cont'>
          <img src="https://i.pinimg.com/564x/e6/e4/95/e6e4956ba5fb180a4dc9a321e10e4fa8.jpg" alt="" />
        </div>
        <div className="imagen_text1 my-auto">
          <div className="content_left ">
            <h2 className='text-justify'>El mate nos une.</h2>
            <p className='text-justify'>
              El mate es un ícono nacional que va más allá de nuestra cultura. Trasciende fronteras, acompaña, reúne. 
              Es nuestro emblema, nuestras raíces.
            </p>
          </div>
        </div>
        <div className="imagen_text2 my-auto">
          <div className='content_right'>
            <h2 className='text-justify'>Cebar no es servir.</h2>
            <p className='text-justify'>
              Cebar significa "repartir alimentando".
              Una acción en la que se necesita poner una cuota de amor, una cuota de cariño, una cuota de dedicación.
            </p>
          </div>
        </div>
      </section>
      <div className='spacer'></div>

      <section className='home_newsLetter mx-auto text-center'>
        <h3 className='home_title'>
          <b></b>
          <span>nuestro newsletter</span>
          <b></b>
        </h3>
        <p className='text-center pb-1'>Inscribite para recibir nuestras últimas novedades</p>
        <form className='home_form text-uppercase'>
          <label>nombre</label>
          <input type="text" name='name' />
          <label>email</label>
          <input type="email" name='email' />
          <div className='d-flex justify-content-center pt-4'>
            <button className='boton botonSubs'>subscribirse</button>
          </div>
        </form>
      </section>
    </>

  )
}

export default Home