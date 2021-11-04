import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import CallIcon from './call-icon';
import CallStatus from './call-status';

const Call = ({ id, created_at, direction, from, to, via, duration, is_archived, call_type, onToggle, onClick }) => {
let path = "";
if (window.location.pathname === "/all") {
    path = "/all/";
} else {
    path = "/inbox/"
}

    return (
        <div className={`call ${is_archived ? 'archived' : ''}`} onDoubleClick={() => onToggle(id, is_archived)}>
            <CallIcon direction={direction} />
            <h3>
                From: {from}
            </h3>
            <div className="call-container">
                <div className="call-child call-description">
                    <p>Via: {via}</p>
                    <p>Date: {created_at.substring(0,10)}</p>
                    <p>Time: {created_at.substring(11,16)}</p>
                </div>
                <div className="call-child view-call-details">
                    <CallStatus call_type={call_type} />
                    <Link className="btn btn-blue" to={path+"details/"+id}>View Details</Link>
                </div>
            </div>
            
        </div>
    )
}

Call.propTypes = {
    id: PropTypes.number,
    created_at: PropTypes.string,
    direction: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    via: PropTypes.string,
    duration: PropTypes.string,
    is_archived: PropTypes.bool,
    call_type: PropTypes.string
}

export default Call