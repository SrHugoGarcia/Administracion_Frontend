import React, { useState } from "react";

const pregunta = {
    pregunta: "",
    respuestaA: "",
    respuestaB: "",
    respuestaC: "",
    respuestaD: ""
  };
  

function Row({ onChange, onRemove, pregunta, respuestaA, respuestaB, respuestaC,respuestaD }) {

    return (
        <div className="bg-white py-10 px-5 mb-10  lg:mb-0 shadow-md rounded-md 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full">
            <label
                htmlFor= "pregunta"
                className="text-amber-500 uppercase font-bold">
                pregunta 01
            </label>
            <input
                id="pregunta"
                type="text"
                name = "pregunta"
                placeholder="Ingresa la pregunta"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={pregunta}
                onChange={e=>onChange("pregunta",e.target.value)}/>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <label
                        htmlFor= "respuestaA"
                        className="text-gray-700 uppercase font-bold">
                        Respuesta A)
                    </label>
                </div>
                 <div className="flex items-center justify-center ">
                    <input
                        id="respuestaA"
                        type="text"
                        name = "respuestaA"
                        placeholder="Ingresa la respuesta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={respuestaA}
                        onChange={e=>onChange("respuestaA",e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <label
                        htmlFor= "respuestaB"
                        className="text-gray-700 uppercase font-bold">
                        Respuesta B)
                    </label>
                </div>
                <div className="flex items-center justify-center ">
                    <input
                        id="respuestaB"
                        type="text"
                        name = "respuestaB"
                        placeholder="Ingresa la respuesta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={respuestaB}
                        onChange={e=>onChange("respuestaB",e.target.value)}/>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <label
                        htmlFor= "respuestaC"
                        className="text-gray-700 uppercase font-bold">
                        Respuesta C)
                    </label>
                </div>
             
                <div className="flex items-center justify-center ">
                    <input
                        id= "respuestaC"
                        type="text"
                        name = "respuestaC"
                        placeholder="Ingresa la respuesta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={respuestaC}
                        onChange={e=>onChange("respuestaC",e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <label
                        htmlFor= "respuestaD"
                        className="text-gray-700 uppercase font-bold">
                        Respuesta D
                    </label>
                </div>
                <div className="flex items-center justify-center ">
                    <input
                        id= "respuestaD"
                        type="text"
                        name = "respuestaD"
                        placeholder="Ingresa la respuesta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={respuestaD}
                        onChange={e=>onChange("respuestaD",e.target.value)}
                    />
                </div>
            </div>
            <button onClick={onRemove}>Eliminar</button>
        </div>
    );
}


const Mmm = () => {

    const [rows, setRows] = useState([pregunta]);

    const handleOnChange = (index, name, value) => {
      const copyRows = {...rows};
      copyRows[index] = {
        ...copyRows[index],
        [name]: value
      };
      setRows(copyRows);    
    };
  
    const handleOnAdd = () => {
      setRows(rows.concat(pregunta));
      const obj = Object.assign({}, rows);
      console.log(rows)
        console.log("------------------")
      console.log(obj)    };
  
    const handleOnRemove = index => {
      const copyRows = [...rows];
      copyRows.splice(index, 1);
      setRows(copyRows);
    };
    const [datos, setDatos] = useState({
        pregunta: "",
        respuestaA: "",
        respuestaB: "",
        respuestaC: "",
        respuestaD: ""
      });

  return (
    <>
    <div>
    {rows.map((row, index) => (
      <Row
      {...row}
      onChange={(name, value) => handleOnChange(index, name, value)}
      onRemove={() => handleOnRemove(index)}
      key={index}
    />
    ))}
    <button onClick={handleOnAdd}>Agregar</button>
  </div> 
  </> )
}

export default Mmm
