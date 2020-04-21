import express from "express";
import { Customers } from "../../entity/Customers";
import { Connection } from "typeorm";
import CustomersService from '../../services/CustomersService';

const router = express.Router();
export default (connection: Connection) => {
    const customerServices = new CustomersService(connection);
    router.get('/getAll', async (req, res) => {
        res.send(await customerServices.findAll());
    });
    
    router.get('/findOne', async (req, res) => {
        res.send(await customerServices.findOne(req.query.id));
    });

    router.post('/saveRow', async (req, res) => {
        res.send(await customerServices.saveRow(req.body));
    });

    router.put('/updateRow', async (req, res) => {
        res.send(await customerServices.updateRow(req.query.id, req.body));
    });

    router.delete('/deleteRow', async (req, res) => {
        res.send(await customerServices.deleteRow(req.query.id));
    });
    
    return {
        router
    }
};