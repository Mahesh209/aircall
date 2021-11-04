import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CallIcon from './call-icon';
import CallStatus from './call-status';


export default class CallDetails extends Component {

    constructor(props) {
        super(props);

        this.archive = this.archive.bind(this);

        this.state = {
            prevPath: this.props.match.params.prev,
            id: '', 
            created_at: '', 
            direction: '', 
            from: '', 
            to: '', 
            via: '', 
            duration: '', 
            is_archived: '', 
            call_type: ''
        };
    }

    componentDidMount() {
        console.log(this.state)
        axios.get('https://aircall-job.herokuapp.com/activities/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                prevPath: this.state.prevPath,
                id: res.data.id, 
                created_at: res.data.created_at, 
                direction: res.data.direction, 
                from: res.data.from, 
                to: res.data.to, 
                via: res.data.via, 
                duration: res.data.duration, 
                is_archived: res.data.is_archived, 
                call_type: res.data.call_type
            });
        })
        .catch((err) => {
            console.log(err);
        });
        
        
    }

    archive() {
        axios.post('https://aircall-job.herokuapp.com/activities/' + this.state.id, {is_archived: !this.state.is_archived})
        .then(res => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
        this.setState({is_archived: !this.state.is_archived})
    }

    render() {
        return (
            <div className={`call ${this.state.is_archived ? 'archived' : ''}`} >
                <CallIcon direction={this.state.direction} />
                <h3>
                    From: {this.state.from}
                </h3>
                <div className="call-container">
                    <div className="call-child call-description">
                        <p>To: {this.state.to}</p>
                        <p>Via: {this.state.via}</p>
                        <p>Duration: {this.state.duration}</p>
                        <p>Date: {this.state.created_at.substring(0,10)} {this.state.created_at.substring(11,16)}</p>
                        <CallStatus call_type={this.state.call_type} />
                        <Link className="btn btn-blue" to={"/" + this.state.prevPath}>Back</Link>
                        <button className={`btn ${this.state.is_archived ? 'btn-green' : 'btn-red'}`} onClick={this.archive}>{`${this.state.is_archived ? 'Unarchive Call' : 'Archive Call'}`}</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

