function Botao(){
    return (
        <>
        <label htmlFor="botao">
            <input type="button" id="botao" value="Clique aqui"
            onClick={() => alert("Até no lixão nasce flor")}/>
        </label>
        </>
    )
}

export default  Botao;
