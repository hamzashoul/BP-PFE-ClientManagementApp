package com.bcp.pfe.clientManagementApplication.Controller;

import com.bcp.pfe.clientManagementApplication.ClientService;
import com.bcp.pfe.clientManagementApplication.Model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;


    @RequestMapping("")
    public ModelAndView index() {
        ModelAndView model = new ModelAndView("Index Page");
        model.addObject("message", "Welocme!!, This is the index page of the API to manage clients");
        return model;
    }

    //get all clients
    @RequestMapping("/clients")
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }

    //get a single client by id
    @RequestMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Client client = clientService.getClientById(id);
        if (client == null) {
            throw new RuntimeException("Client not found with id: " + id);
        }
        return ResponseEntity.ok(client);
    }


    //Post request to add client
    @RequestMapping(method = RequestMethod.POST, value = "/clients")
    public void addClient(@RequestBody Client client){
        clientService.addClient(client);
    }

    //Put request to update client
    @PutMapping ( "/clients/{id}")
    public void updateClient(@PathVariable Long id,@RequestBody Client client){
        clientService.updateClient(id,client);
    }

    //Delete request to delete a client
    @DeleteMapping( "/clients/{id}")
    public void deleteClient(@PathVariable Long id){
        clientService.deleteClient(id);
    }

}
