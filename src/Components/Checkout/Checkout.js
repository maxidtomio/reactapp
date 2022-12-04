import React, { useState, useContext } from 'react';
import db from '../../Service/Firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import Swal from "sweetalert2";
import { GlobalContext } from '../../Context/CartContext';
import './styleCheckout.css'

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName}
      />
      {error.nombre && (
        <p className="text-danger my-2">{error.nombre}</p>
      )}
    </div>
  );
};

const validation = (campos) => {
  return campos.some((campo) => campo === "")
}

const Checkout = ({ total, items }) => {

  const { clear, setLoading } = useContext(GlobalContext);


  const fetchGenerateTicket = async ({ datos }) => {
    setLoading(true)
    try {
      const col = collection(db, "ordenes")
      const order = await addDoc(col, datos)
      setLoading(false)
      console.log(order.id)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUpdateDoc = async (item) => {

    const orderDoc = doc(db, 'productos', item.id);

    try {
      await updateDoc(orderDoc, {
        stock: item.stock - item.quantity
      });
      console.log("se actualizó correctamente")

    } catch (error) {
      console.log(error)
    }
  }

  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
    },
    total: total,
    items: items,
  });

  const [error, setError] = useState({});

  const { buyer: { email, nombre, apellido, telefono } } = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation([email, nombre, apellido, telefono])) {
      Swal.fire({
        title: "Oops!",
        text: "Faltan campos por completar",
        icon: "error"
      });
      return;
    }
    Swal.fire({
      title: "Genial!",
      text: "Su orden de compra ha sido confirmada. Revisa tu correo electrónico para más detalles.",
      icon: "success",
    });

    fetchGenerateTicket({ datos: formulario }).then(x => {
      items.forEach(item => fetchUpdateDoc(item))
    });

    clear();

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      return;
    }
    setError({})
  };

  return (
    <>
      <h2 className='text-center pb-5'>Checkout</h2>
      <form onSubmit={onSubmit} className='checkout_form'>
        {Object.keys(formulario.buyer).map((key, index) => (
          <>
            <label>{`${key}`}</label>
            <Input
              key={index}
              className="mb-3"
              type="text"
              name={`${key}`}
              value={key.value}
              onChange={handleChange}
              onBlur={handleBlur}
              inputClassName={`${error[key] && "is-invalid"}`}
              error={error}
            />
          </>
        ))}

        <div className='form_total'>
          <div className='form_total_content'>
            <div className='form_total_title'>total a pagar:</div>
            <div className='form_total_amount'>$ {total}</div>
          </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
          <button className='boton mt-4'>finalizar compra</button>
        </div>
      </form>
    </>
  )
}

export default Checkout