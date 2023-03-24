package com.bcp.pfe.clientManagementApplication;


import com.bcp.pfe.clientManagementApplication.Model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;


    public List<Client> getAllClients() {
        //return courses;
        List<Client> clients =new ArrayList<>();
        clientRepository.findAll()
                .forEach(clients::add);
        return clients;
    }

    public Client getClientById(Long id){
        return clientRepository.findClientById(id);
    }

    public void addClient(Client client){
        clientRepository.save(client);
    }

    public void updateClient(Long id, Client client) {
        Optional<Client> clientData=clientRepository.findById(id);
        if(clientData.isPresent()){
            Client updatedClient=clientData.get();
            updatedClient.setName(client.getName());
            updatedClient.setEmail(client.getEmail());
            updatedClient.setAddress(client.getAddress());
            clientRepository.save(updatedClient);
        }
        else {
            System.out.println("Client not found");
        }
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

}
