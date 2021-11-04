const CallIcon = ({ direction }) => {

    let icon;
    if (direction === 'outbound') {
        icon = <img className="call-icon" src="https://www.svgrepo.com/show/30199/outgoing-call.svg" alt="icon"/>
    } else {
        icon = <img className="call-icon" src="https://www.svgrepo.com/show/60122/incoming-call.svg" alt="icon"/>
    }
    return (
        <>{icon}</>
    )
}

export default CallIcon;