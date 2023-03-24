import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from "../services/ClientService";

function ListClientComponent() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ClientService.getClient().then((response) => {
      setClients(response.data);
    });
  }, []);

  function addClient() {
    navigate("/add-client");
  }
  function editClient(id){
    navigate(`/update-client/${id}`);
  }
  function deleteClient(id){
    ClientService.deleteClient(id).then(res=>{
      setClients(clients.filter(client => client.id !==id));
    })
  }
  
  function viewClient(id){
      navigate(`/view-client/${id}`);
  }

  return (
    <div>
      <h2 className="text-center">Clients List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addClient} style={{width:'200px',height:'50px',position:'relative',margin:'auto'}}>
          Add Client
        </button>
      </div>
      <div className="row">
        <table
          className="table table-striped table-bordered"
          style={{
            border: "1px solid black",
            position: "relative",
            top: "20px",
            margin: "auto",
            width: "1000px",
          }}
        >
          <thead>
            <tr  style={{backgroundColor:'#76b5c5'}}>
              <th>Client ID</th>
              <th>Client name</th>
              <th>Client email</th>
              <th>Client address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>
                  <button style={{marginRight: '10px'}} onClick={() => editClient(client.id)} className="btn btn-info">Update</button>
                  <button style={{marginRight: '10px'}} onClick={() => deleteClient(client.id)} className="btn btn-danger">Delete</button>
                  <button onClick={() => viewClient(client.id)} className="btn btn-info">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListClientComponent;
