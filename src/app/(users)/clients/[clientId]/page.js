const ClientDetail = ({ params }) => {
    console.log(params)
    return(
        <h1 className="center">DETALLE DEL BAR {params.clientId}</h1>
    )
}

export default ClientDetail