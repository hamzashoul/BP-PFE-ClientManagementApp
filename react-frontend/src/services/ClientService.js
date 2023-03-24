import axios from "axios";

const CLIENTS_REST_API_URL='http://localhost:8080/clients';

class ClientService{
    getClient(){
        return axios.get(CLIENTS_REST_API_URL);
    }
    createClient(client){
        return axios.post(CLIENTS_REST_API_URL,client);
    }
    getClientById(clientId){
        return axios.get(CLIENTS_REST_API_URL+'/'+clientId);
    }
    updateClient(client, clientId){
        return axios.put(CLIENTS_REST_API_URL+'/'+clientId,client);
    }
    deleteClient(clientId){
        return axios.delete(CLIENTS_REST_API_URL+'/'+clientId);
    }
}

export default new ClientService();