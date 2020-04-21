import express from "express";
import { Users } from "../../entity/Users";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import fs from 'fs';

export default class UserRoute {
    readonly userRepository = getRepository(Users);
    private token: string;
    private loadedUser: Users;
    private result: any;
    readonly secret = 'SECRET_KEY'; // normally stored in process.env.secret
    readonly opts = {
        expiresIn: 600,
        issuer: 'accounts.examplesoft.com',
        audience: 'yoursite.net'
    };


    private async verifyIfUserExist(email: string) {
        this.loadedUser = await this.userRepository.findOne({ where: { email } });
        this.result = typeof (this.loadedUser) == 'undefined' ?
            { status: 2, message: 'Invalid credentials' } : { status: 1, message: 'OK', pw: this.loadedUser.password };
        return this.result;
    }

    public async getAndVerifyUserCredentials(email: string, password: string) {
        await this.verifyIfUserExist(email);
        let response = this.getDefaultAnswer();
        if (this.result.status === 1) {
            if (bcrypt.compareSync(password, this.result.pw)) {
                response = this.getSuccessAnswer();
            }
        }
        return response;
    }

    private getSuccessAnswer() {
        this.token = jwt.sign({ email: 'test' }, this.secret, this.opts);
        return { message: 'ok', token: this.token };
    }

    private getDefaultAnswer() {
        return { message: 'failed', token: 'no token due failure' };
    }

}
