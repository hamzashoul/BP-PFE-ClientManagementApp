import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClientService from '../services/ClientService';

function ViewClientComponent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState({});

  useEffect(() => {
    ClientService.getClientById(id)
      .then((res) => {
        setClient(res.data);
      })
      .catch((err) => {
        navigate('/clients');
      });
  }, [id, navigate]);

  return (
    <div>
        <br />
      <div className='card col-md-6 offset-md-3'>
        <h3 className='text-center'>View Client Details</h3>
        <div className='card-body'>
        <div className='row' style={{marginBottom:'10px'}}>
            <label style={{ display: 'inline-block' }}>Client Full Name: </label>
            <div style={{ display: 'inline-block' }}><strong>{client.name}</strong></div>
          </div>
          <div className='row' style={{marginBottom:'10px',display:'flex'}}>
            <label>Client Email:</label>
            <div><strong>{client.email}</strong></div>
          </div>
          <div className='row'>
            <label>Client Address: </label>
            <div><strong>{client.address}</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewClientComponent;
