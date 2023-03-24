import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from '../services/ClientService';

const CreateClientComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const changeNameHandler = (event) => {
    setName(event.target.value);
}

const changeEmailHandler = (event) => {
    setEmail(event.target.value);
}

const changeAddressHandler = (event) => {
    setAddress(event.target.value);
}

  const saveEmployee = (e) => {
    e.preventDefault();
    let client = { name, email, address };
    console.log('client => ' + JSON.stringify(client));
    ClientService.createClient(client).then(res => {
        navigate('/clients');
    });
  };

  const cancel = () => {
    navigate('/clients');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Client</h3>
            <div className="card-body">
              <form>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label>Full Name</label>
                <input
                    placeholder="Full Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={changeNameHandler}
  />
</div>
<div className="form-group" style={{ marginBottom: '1.5rem' }}>
  <label>Email</label>
  <input
    placeholder="Email"
    name="email"
    className="form-control"
    value={email}
    onChange={changeEmailHandler}
  />
</div>
<div className="form-group" style={{ marginBottom: '1.5rem' }}>
  <label>Address</label>
  <input
    placeholder="Address"
    name="address"
    className="form-control"
    value={address}
    onChange={changeAddressHandler}
  />
</div>
                <button
                  className="btn btn-success"
                  onClick={saveEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClientComponent;
