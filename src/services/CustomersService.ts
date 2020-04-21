import { Customers } from "../entity/Customers";
import { Connection } from "typeorm";

export default class CustomersService {
    private connectionManager : Connection;
    private customersList : Array <Customers> ;

    constructor (connectionManager) {
        this.connectionManager = connectionManager;
    }

    public async findAll(){
        this.customersList = await this.connectionManager.manager.find(Customers);
        return this.customersList;
    }

    public async findOne(customerId: number){
        let customer: Customers = null;
        if (customerId != null) {
            customer = await this.connectionManager.manager.findOne(Customers, customerId);
        }
        return customer;
    }

    public async saveRow(data: any){
        const customer = new Customers;
        customer.setData(data)
        const customerResult = await this.connectionManager.manager.save(customer);
        return customerResult.id > 0 ? {message: 'Ok. Inserted : ' + customerResult.id } : {message: 'An error ocurred'};
    }

    public async updateRow(customerId: number, data: any){
        let response = {message: 'An error ocurred'};
        if (customerId != null) {
            await this.connectionManager.manager.update(Customers, customerId, {name: data.name, email: data.email});
            response.message = 'Ok. Updated ';
        }
        return response;
    }

    public async deleteRow(customerId: number){
        let response = {};
        if (customerId != null) {
            const customerResult = await this.connectionManager.manager.delete(Customers, customerId);
            response = {message: 'Ok. Deleted : ' + customerResult.affected };
        }
        return response;
    }
    
}