import axios from 'axios';
import React, { Component } from 'react';
import Call from './call';


export default class Calls extends Component {
    constructor(props) {
        super(props);

        this.onToggle = this.onToggle.bind(this);
        this.archive = this.archive.bind(this);
        this.archiveAll = this.archiveAll.bind(this);

        this.state = {
            showArchived: this.props.showArchived,
            calls: []
        };
    }

    componentDidMount() {
        axios.get('https://aircall-job.herokuapp.com/activities')
        .then(res => {
            if (this.state.showArchived) {
                this.setState({
                    calls: res.data
                });
            } else {
                this.setState({
                    calls: res.data.filter(el => !el.is_archived)
                });
            }
            console.log(this.state.calls)
        })
        .catch((err) => {
            console.log(err);
        });
        
    }

    onToggle(id, is_archived) {
        axios.post('https://aircall-job.herokuapp.com/activities/' + id, {is_archived: !is_archived})
        .then(res => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
        if (!this.state.showArchived) {
            this.setState({
                calls: this.state.calls.filter(el => el.id !== id)
            })
        } else {
            this.setState({
                calls: this.state.calls.map((call) => call.id === id ? { ...call, is_archived: !is_archived } : call)
            })
        }
        
    }

    archive(id) {
        axios.post('https://aircall-job.herokuapp.com/activities/' + id, {is_archived: true})
        .then(res => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    callList() {
        return this.state.calls.map(currCall => {
            return <Call id={currCall.id} 
            created_at={currCall.created_at}
            direction={currCall.direction}
            from={currCall.from}
            to={currCall.to}
            via={currCall.via}
            duration={currCall.duration}
            is_archived={currCall.is_archived}
            call_type={currCall.call_type}
            onToggle={this.onToggle}
            key={currCall.id} />;
        })
    }

    archiveAll() {
        for (const call of this.state.calls) {
            this.archive(call.id);
        }
        this.setState({
            calls: []
        });
    }

    render() {
        let button;
        if (!this.state.showArchived) {
            button = <button className="btn btn-red" onClick={this.archiveAll}>Archive all calls</button>;
        }
        return (
            <div>
                {button}
                {this.callList()}
            </div>
        )
    }
}

