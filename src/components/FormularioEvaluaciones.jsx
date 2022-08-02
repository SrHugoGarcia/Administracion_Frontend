import { useState,useEffect } from "react";
import Alerta from "./Alerta";
import useEvaluaciones from "../hooks/useEvaluaciones";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {faCircle} from "@fortawesome/free-solid-svg-icons"



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
  const opcionMultiple = [
    
  
    ///////////////////Pregunta 01 ///////////////////////
    {
        label: "PREGUNTA 01",
        htmlFor: "pregunta01",
        id: "pregunta01",
        placeholder: "Ingresa la pregunta",
        ////////Respuesta A///////
        labelA: "respuesta A)",
        htmlForA: "respuesta01A",
        idA: "respuesta01A",
        placeholderA: "Ingresa la respuesta del inciso A)",
        ///////Respuesta B ///////////
        labelB: "RESPUESTA B)",
        htmlForB: "respuesta01B",
        idB: "respuesta01B",
        placeholderB: "Ingresa la respuesta del inciso B)",
        ///////Respuesta C///////////
        labelC: "RESPUESTA C)",
        htmlForC: "respuesta01C",
        idC: "respuesta01C",
        placeholderC: "Ingresa la respuesta del inciso C)",
        ///////Respuesta D/////////
        labelD: "RESPUESTA D)",
        htmlForD: "respuesta01D",
        idD: "respuesta01D",
        placeholderD: "Ingresa la respuesta del inciso D)",    
    },
   ///////////////////Pregunta 02 ///////////////////////
   {
    label: "PREGUNTA 02",
    htmlFor: "pregunta02",
    id: "pregunta02",
    placeholder: "Ingresa la pregunta",
    ////////Respuesta A///////
    labelA: "RESPUESTA A)",
    htmlForA: "respuesta02A",
    idA: "respuesta02A",
    placeholderA: "Ingresa la respuesta del inciso A)",
    ///////Respuesta B ///////////
    labelB: "RESPUESTA B)",
    htmlForB: "respuesta02B",
    idB: "respuesta02B",
    placeholderB: "Ingresa la respuesta del inciso B)",
    ///////Respuesta C///////////
    labelC: "RESPUESTA C)",
    htmlForC: "respuesta02C",
    idC: "respuesta02C",
    placeholderC: "Ingresa la respuesta del inciso C)",
    ///////Respuesta D/////////
    labelD: "RESPUESTA D)",
    htmlForD: "respuesta02D",
    idD: "respuesta02D",
    placeholderD: "Ingresa la respuesta del inciso D)",    
},
///////////////////Pregunta 03 ///////////////////////
{
  label: "PREGUNTA 03",
  htmlFor: "pregunta03",
  id: "pregunta03",
  placeholder: "Ingresa la pregunta",
  ////////Respuesta A///////
  labelA: "RESPUESTA A)",
  htmlForA: "respuesta03A",
  idA: "respuesta03A",
  placeholderA: "Ingresa la respuesta del inciso A)",
  ///////Respuesta B ///////////
  labelB: "RESPUESTA B)",
  htmlForB: "respuesta03B",
  idB: "respuesta03B",
  placeholderB: "Ingresa la respuesta del inciso B)",
  ///////Respuesta C///////////
  labelC: "RESPUESTA C)",
  htmlForC: "respuesta03C",
  idC: "respuesta03C",
  placeholderC: "Ingresa la respuesta del inciso C)",
  ///////Respuesta D/////////
  labelD: "RESPUESTA D)",
  htmlForD: "respuesta03D",
  idD: "respuesta03D",
  placeholderD: "Ingresa la respuesta del inciso D)",    
},
///////////////////Pregunta 04 ///////////////////////
{
  label: "PREGUNTA 04",
  htmlFor: "pregunta04",
  id: "pregunta04",
  placeholder: "Ingresa la pregunta",
  ////////Respuesta A///////
  labelA: "RESPUESTA A)",
  htmlForA: "respuesta04A",
  idA: "respuesta04A",
  placeholderA: "Ingresa la respuesta del inciso A)",
  ///////Respuesta B ///////////
  labelB: "RESPUESTA B)",
  htmlForB: "respuesta04B",
  idB: "respuesta04B",
  placeholderB: "Ingresa la respuesta del inciso B)",
  ///////Respuesta C///////////
  labelC: "RESPUESTA C)",
  htmlForC: "respuesta04C",
  idC: "respuesta04C",
  placeholderC: "Ingresa la respuesta del inciso C)",
  ///////Respuesta D/////////
  labelD: "RESPUESTA D)",
  htmlForD: "respuesta04D",
  idD: "respuesta04D",
  placeholderD: "Ingresa la respuesta del inciso D)",    
},
///////////////////Pregunta 05 ///////////////////////
{
  label: "PREGUNTA 05",
  htmlFor: "pregunta05",
  id: "pregunta05",
  placeholder: "Ingresa la pregunta",
  ////////Respuesta A///////
  labelA: "RESPUESTA A)",
  htmlForA: "respuesta05A",
  idA: "respuesta05A",
  placeholderA: "Ingresa la respuesta del inciso A)",
  ///////Respuesta B ///////////
  labelB: "RESPUESTA B)",
  htmlForB: "respuesta05B",
  idB: "respuesta05B",
  placeholderB: "Ingresa la respuesta del inciso B)",
  ///////Respuesta C///////////
  labelC: "RESPUESTA 05 C)",
  htmlForC: "respuesta05C",
  idC: "respuesta05C",
  placeholderC: "Ingresa la respuesta del inciso C)",
  ///////Respuesta D/////////
  labelD: "RESPUESTA 05 D)",
  htmlForD: "respuesta05D",
  idD: "respuesta05D",
  placeholderD: "Ingresa la respuesta del inciso D)",    
},];

const preguntasAbiertas = [
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
},]
  const [alerta, setAlerta] = useState({});

  const {guardarEvaluacion, cliente} = useEvaluaciones();
  /*
  useEffect(() => {
    if(cliente?.nombreEvaluacion) {
      setDatos(cliente.pregunta01)
      setDatos(cliente.respuesta01A)
      setDatos(cliente.respuesta01B)
      setDatos(cliente.respuesta01C)
      setDatos(cliente.respuesta01D)
    }
  }, [cliente]) */

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
    console.log(datos)
  
    setTipoEvaluacion('');
    document.getElementById('myform').reset();

    
  };

  const { msg } = alerta;

  return (
    <>
      <h2 className="font-black text-3xl text-center">Administrador de Evaluaciones</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade Evaluaciones{" "}
        <span className="text-amber-500 font-bold">y Administralas.</span>
      </p>


      <form
      id="myform"
        className="space-y-4 grid grid-cols-1 "
        onSubmit={handleSubmit}
      >
        <div  className="justify-items-start space-y-4   2xl:px-32 xl:px-28 lg:px-20 md:px-24 ">
       <div  className=" bg-white py-9 px-5 mb-10  lg:mb-0   shadow-md rounded-md 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:full ">
          <label htmlFor="tipoEvaluacion" className="text-gray-700 uppercase font-bold">
            TIPO DE EVALUACION
          </label>
          <select
            id="tipoEvaluacion"
            name= "tipoEvaluacion"
            className="uppercase border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            onChange={(e) => setTipoEvaluacion(e.target.value)}
            >
            <option value="">Selecciona una opcion</option>
            <option value="DIAGNOSTICA">Diagnostica</option>
            <option value="FINAL">Final</option>
          </select>

          
        </div>
        <div className="bg-white py-9 px-5 mb-10  lg:mb-0 shadow-md rounded-md 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:full">
            <label
                htmlFor= "nombreEvaluacion"
                className="text-gray-700 uppercase font-bold"
            >
                NOMBRE DE LA EVALUACION
            </label>
            <input
                id= "nombreEvaluacion"
                type="text"
                name = "nombreEvaluacion"
                placeholder="Ingresa el nombre de la evaluacion"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
        </div>
        
            {/*---------------------Inicia primera pregunta ----------------------*/}
            <div className="space-y-4 grid justify-items-center"
> 
        {opcionMultiple.map((dato) => (
            <div className="bg-white py-10 px-5 mb-10  lg:mb-0 shadow-md rounded-md 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full"
            key={dato.label}
            >
            <label
                htmlFor= {dato.htmlFor}
                className="text-amber-500 uppercase font-bold"
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
           
            {/*---------------------respuesta a ----------------------*/}

            <div
            className="grid grid-cols-2"
            >
              <div className="flex items-center justify-center">
            <label
                htmlFor= {dato.htmlForA}
                className="text-gray-700 uppercase font-bold"
            >
                {dato.labelA}
              
            </label>
            </div>
             
            <div className="flex items-center justify-center ">
          
            <input
                id={dato.idA}
                type="text"
                name = {dato.idA}
                placeholder={dato.placeholderA}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
            </div>
      {/*---------------------Respuesta b ----------------------*/}

            <div
            className="grid grid-cols-2"
            >
              <div className="flex items-center justify-center">
            <label
                htmlFor= {dato.htmlForB}
                className="text-gray-700 uppercase font-bold"
            >
                {dato.labelB}
            </label>
            </div>
             
            <div className="flex items-center justify-center ">
            <input
                id={dato.idB}
                type="text"
                name = {dato.idB}
                placeholder={dato.placeholderB}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
            </div>
            {/*---------------------Respuesta C ----------------------*/}

            <div
            className="grid grid-cols-2"
            >
              <div className="flex items-center justify-center">
            <label
                htmlFor= {dato.htmlForC}
                className="text-gray-700 uppercase font-bold"
            >
                {dato.labelC}
            </label>
            </div>
             
            <div className="flex items-center justify-center ">
            <input
                id={dato.idC}
                type="text"
                name = {dato.idC}
                placeholder={dato.placeholderC}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
            </div>
            {/*---------------------Respuesta D----------------------*/}
            <div
            className="grid grid-cols-2"
            >
              <div className="flex items-center justify-center">
            <label
                htmlFor= {dato.htmlForD}
                className="text-gray-700 uppercase font-bold"
            >
                {dato.labelD}
            </label>
            </div>
             
            <div className="flex items-center justify-center ">
            <input
                id={dato.idD}
                type="text"
                name = {dato.idD}
                placeholder={dato.placeholderD}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                onChange={e=>setDatos({...datos, [e.target.name]:e.target.value})}
            />
            </div>
            </div>

            </div>
            
           
        ))}
            {/* --------------------Preguntas abiertas------------------------------*/}
            {preguntasAbiertas.map((dato) => (
            <div className="bg-white py-9 px-5 mb-10 w-full lg:mb-0 shadow-md rounded-md 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full"
              key={dato.label}

            >
            <label
                htmlFor= {dato.htmlFor}
                className="text-amber-500 uppercase font-bold"
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
        <div className="flex items-center justify-center w-full  ">
          <input
            value="crear formulario"
             type="submit"
             className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors rounded-md 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full"
           /> </div>
           </div>
      </form>
      <div className="py-5">
      {msg && <Alerta alerta={alerta} />}

      </div>
      
    </>
  );
};

export default FormularioEvaluaciones;
