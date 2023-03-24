package com.bcp.pfe.clientManagementApplication;


import com.bcp.pfe.clientManagementApplication.Model.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClientRepository extends CrudRepository<Client,Long> {
    public List<Client> findAll();
    public Client findClientById(Long id);
}
