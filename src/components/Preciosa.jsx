import { useState } from "react";
import Alerta from "./Alerta";
import useEvaluaciones from "../hooks/useEvaluaciones";
const FormularioEvaluaciones = () => {
    const [datos, setDatos] = useState({
      nombreEvaluacion : '',
      tipoEvaluacion: '', 
      pregunta01 : '', respuesta01A :'', respuesta01B : '', respuesta01C : '', respuesta01D : '',
      pregunta02 : '', respuesta02A :'', respuesta02B : '', respuesta02C : '', respuesta02D : '',
      pregunta03 : '', respuesta03A :'', respuesta03B : '', respuesta03C : '', respuesta03D : '',
      pregunta04 : '', respuesta04A :'', respuesta04B : '', respuesta04C : '', respuesta04D : '',
      pregunta05 : '', respuesta05A :'', respuesta05B : '', respuesta05C : '', respuesta05D : '',
      pregunta06 : '',
      pregunta07 : '',
      pregunta08 : '',
      pregunta09 : '',
      pregunta10 : '',
    });

  const [tipoEvaluacion, setTipoEvaluacion] = useState("");
  const formulario = [
    
   /////////////////Nombre de la evaluacion ///////////////////////7
    {
      label: "NOMBRE DE EVALUACION",
      htmlFor: "nombreEvaluacion",
      id: "nombreEvaluacion",
      placeholder: "Ingresa el nombre de la evaluacion",
    },
    ///////////////////Pregunta 01 ///////////////////////
    {
        label: "PREGUNTA 01",
        htmlFor: "pregunta01",
        id: "pregunta01",
        placeholder: "Ingresa la pregunta",
    },
    {
        label: "RESPUESTA 01 A)",
        htmlFor: "respuesta01A",
        id: "respuesta01A",
        placeholder: "Ingresa la respuesta del inciso A)",
    },
    {
        label: "RESPUESTA 01 B)",
        htmlFor: "respuesta01B",
        id: "respuesta01B",
        placeholder: "Ingresa la respuesta del inciso B)",
    },
    {
        label: "RESPUESTA 01 C)",
        htmlFor: "respuesta01C",
        id: "respuesta01C",
        placeholder: "Ingresa la respuesta del inciso C)",
    },
    {
        label: "RESPUESTA 01 D)",
        htmlFor: "respuesta01D",
        id: "respuesta01D",
        placeholder: "Ingresa la respuesta del inciso D)",
    },
    //////////////Pregunta02///////////////////////
    {
        label: "PREGUNTA 02",
        htmlFor: "pregunta02",
        id: "pregunta02",
        placeholder: "Ingresa la pregunta",
    },
    {
        label: "RESPUESTA 02 A)",
        htmlFor: "respuesta02A",
        id: "respuesta02A",
        placeholder: "Ingresa la respuesta del inciso A)",
    },
    {
        label: "RESPUESTA 02 B)",
        htmlFor: "respuesta02B",
        id: "respuesta02B",
        placeholder: "Ingresa la respuesta del inciso B)",
    },
    {
        label: "RESPUESTA 02 C)",
        htmlFor: "respuesta02C",
        id: "respuesta02C",
        placeholder: "Ingresa la respuesta del inciso C)",
    },
    {
        label: "RESPUESTA 02 D)",
        htmlFor: "respuesta02D",
        id: "respuesta02D",
        placeholder: "Ingresa la respuesta del inciso D)",
    },
     //////////////Pregunta03///////////////////////
     {
        label: "PREGUNTA 03",
        htmlFor: "pregunta03",
        id: "pregunta03",
        placeholder: "Ingresa la pregunta",
    },
    {
        label: "RESPUESTA 03 A)",
        htmlFor: "respuesta03A",
        id: "respuesta03A",
        placeholder: "Ingresa la respuesta del inciso A)",
    },
    {
        label: "RESPUESTA 03 B)",
        htmlFor: "respuesta03B",
        id: "respuesta03B",
        placeholder: "Ingresa la respuesta del inciso B)",
    },
    {
        label: "RESPUESTA 03 C)",
        htmlFor: "respuesta03C",
        id: "respuesta03C",
        placeholder: "Ingresa la respuesta del inciso C)",
    },
    {
        label: "RESPUESTA 03 D)",
        htmlFor: "respuesta03D",
        id: "respuesta03D",
        placeholder: "Ingresa la respuesta del inciso D)",
    },

     //////////////Pregunta04///////////////////////
    {
        label: "PREGUNTA 04",
        htmlFor: "pregunta04",
        id: "pregunta04",
        placeholder: "Ingresa la pregunta",
    },
    {
        label: "RESPUESTA 04 A)",
        htmlFor: "respuesta04A",
        id: "respuesta04A",
        placeholder: "Ingresa la respuesta del inciso A)",
    },
    {
        label: "RESPUESTA 04 B)",
        htmlFor: "respuesta04B",
        id: "respuesta04B",
        placeholder: "Ingresa la respuesta del inciso B)",
    },
    {
        label: "RESPUESTA 04 C)",
        htmlFor: "respuesta04C",
        id: "respuesta04C",
        placeholder: "Ingresa la respuesta del inciso C)",
    },
    {
        label: "RESPUESTA 04 D)",
        htmlFor: "respuesta04D",
        id: "respuesta04D",
        placeholder: "Ingresa la respuesta del inciso D)",
    },
     //////////////Pregunta05///////////////////////
     {
        label: "PREGUNTA 05",
        htmlFor: "pregunta05",
        id: "pregunta05",
        placeholder: "Ingresa la pregunta",
    },
    {
        label: "RESPUESTA 05 A)",
        htmlFor: "respuesta05A",
        id: "respuesta05A",
        placeholder: "Ingresa la respuesta del inciso A)",
    },
    {
        label: "RESPUESTA 05 B)",
        htmlFor: "respuesta05B",
        id: "respuesta05B",
        placeholder: "Ingresa la respuesta del inciso B)",
    },
    {
        label: "RESPUESTA 05 C)",
        htmlFor: "respuesta05C",
        id: "respuesta05C",
        placeholder: "Ingresa la respuesta del inciso C)",
    },
    {
        label: "RESPUESTA 05 D)",
        htmlFor: "respuesta05D",
        id: "respuesta05D",
        placeholder: "Ingresa la respuesta del inciso D)",
    },
    //////////////Pregunta06///////////////////////
    {
        label: "PREGUNTA 06",
        htmlFor: "pregunta06",
        id: "pregunta06",
        placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta07///////////////////////
    {
        label: "PREGUNTA 07",
        htmlFor: "pregunta07",
        id: "pregunta07",
        placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta08///////////////////////
    {
        label: "PREGUNTA 08",
        htmlFor: "pregunta08",
        id: "pregunta08",
        placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta09///////////////////////
    {
        label: "PREGUNTA 09",
        htmlFor: "pregunta09",
        id: "pregunta09",
        placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta10///////////////////////
    {
        label: "PREGUNTA 10",
        htmlFor: "pregunta10",
        id: "pregunta10",
        placeholder: "Ingresa la pregunta",
    },
  ];


  const [alerta, setAlerta] = useState({});

  const {guardarEvaluacion} = useEvaluaciones();

  const handleSubmit = async(e) => {
    e.preventDefault();
      datos.tipoEvaluacion = tipoEvaluacion;
    //* Validar el formulario
    if ([datos.tipoEvaluacion,  datos.nombreEvaluacion, 
        datos.pregunta01, datos.respuesta01A, datos.respuesta01B,datos.respuesta01C, datos.respuesta01D,
        datos.pregunta02, datos.respuesta02A, datos.respuesta02B,datos.respuesta02C, datos.respuesta02D,
        datos.pregunta03, datos.respuesta03A, datos.respuesta03B,datos.respuesta03C, datos.respuesta03D,
        datos.pregunta04, datos.respuesta04A, datos.respuesta04B,datos.respuesta04C, datos.respuesta04D,
        datos.pregunta05, datos.respuesta05A, datos.respuesta05B,datos.respuesta05C, datos.respuesta05D,
        datos.pregunta06, datos.pregunta07,   datos.pregunta08,  datos.pregunta09,   datos.pregunta10
    ].includes("")) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarEvaluacion(datos);
    setAlerta({
      msg: 'Guardado Correctamente'
    });
  
    setTipoEvaluacion('')
    setDatos(
        pregunta01(''), respuesta01A(''), respuesta01B(''), respuesta01C(''), respuesta01D(''),
    pregunta02(''), respuesta02A(''), respuesta02B(''),respuesta02C(''), respuesta02D(''),
    pregunta03(''), respuesta03A(''), respuesta03B(''),respuesta03C(''), respuesta03D(''),
    pregunta04(''), respuesta04A(''), respuesta04B(''),respuesta04C(''), respuesta04D(''),
    pregunta05(''), respuesta05A(''), respuesta05B(''),respuesta05C(''), respuesta05D(''),
    pregunta06(''), pregunta07(''),   pregunta08(''),  pregunta09(''),   pregunta10(''));
    setDatos.nombreEvaluacion('')
    
console.log(setDatos)
    
  };

  const { msg } = alerta;

  return (
    <>
      <h2 className="font-black text-3xl text-center">Administrador de Evaluaciones</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade Evaluaciones{" "}
        <span className="text-amber-500 font-bold">y Administralas.</span>
      </p>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
       <div  className="mb-5">
          <label htmlFor="tipoEvaluacion" className="text-gray-700 uppercase font-bold">
            TIPO DE EVALUACION
          </label>
          <select
            id="tipoEvaluacion"
            name= "tipoEvaluacion"
            className="uppercase border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => setTipoEvaluacion(e.target.value)}
            >
            <option value="">Selecciona una opcion</option>
            <option value="DIAGNOSTICA">Diagnostica</option>
            <option value="FINAL">Final</option>
          </select>
        </div>
        {formulario.map((dato) => (
            <div className="mb-5">
            <label
                htmlFor= {dato.htmlFor}
                className="text-gray-700 uppercase font-bold"
            >
                {dato.label}
            </label>
            <input
                id={dato.id}
                type="text"
                name = {dato.id}
                placeholder={dato.placeholder}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
           
        ))}
          <input
             type="submit"
             className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors rounded-md"
           />
      </form>
    </>
  );
};

export default FormularioEvaluaciones;
