export function Notificacao(props) {
    return (
        <>
            {
                props.mensagem && props.mensagem.length > 0 &&
                <p>Você tem { props.mensagem.length } notificações</p>
            }
        </>
    );
}