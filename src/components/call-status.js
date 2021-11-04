const CallStatus = ({ call_type }) => {

    let icon;
    if (call_type === 'missed') {
        icon = <img className="call-icon" src="https://cdn1.iconfinder.com/data/icons/mobile-9/48/Missed_Call-512.png" alt="missed call" />
    } else if (call_type === 'voicemail') {
        icon = <img className="call-icon" src="https://icon-library.com/images/iphone-voicemail-icon/iphone-voicemail-icon-17.jpg" alt="voicemail" />
    } else {
        icon = <img className="call-icon" src="https://icon-library.com/images/answer-phone-icon/answer-phone-icon-17.jpg" alt="voicemail" />
    }
    return (
        <div className="call-status">{call_type} {icon}</div>
    )
}

export default CallStatus;