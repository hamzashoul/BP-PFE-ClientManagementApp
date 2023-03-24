import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService';

const UpdateClientComponent = (props) => {
    const{id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate=useNavigate();

    useEffect(() => {
        ClientService.getClientById(id).then(res => {
            let client = res.data;
            setName(client.name);
            setEmail(client.email);
            setAddress(client.address);
        });
    }, [id]);

    const updateClient = (e) => {
        e.preventDefault();
        let client = { name, email, address };
        console.log('client => ' + JSON.stringify(client));
        console.log('id => ' + JSON.stringify(id));
        ClientService.updateClient(client, id).then(res => {
            navigate('/clients');
        });
    }

    const changeNameHandler = (event) => {
        setName(event.target.value);
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const changeAddressHandler = (event) => {
        setAddress(event.target.value);
    }

    const cancel = () => {
        navigate('/clients');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Client</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label> Full Name: </label>
                                    <input placeholder="Full Name" name="name" className="form-control"
                                        value={name} onChange={changeNameHandler} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label> Email: </label>
                                    <input placeholder="Email" name="email" className="form-control"
                                        value={email} onChange={changeEmailHandler} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label> Address: </label>
                                    <input placeholder="Address" name="address" className="form-control"
                                        value={address} onChange={changeAddressHandler} />
                                </div>

                                <button className="btn btn-success" onClick={updateClient}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateClientComponent;
