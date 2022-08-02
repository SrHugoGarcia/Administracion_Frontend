const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-rose-500 to-rose-600' : 'from-green-500 to-green-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta