import { Request, Response } from 'express';
import { User } from '../models/User';
import { DatabaseService } from '../services/DatabaseService';
import { LoggerService } from '../services/LoggerService';

class AdminController {
    private databaseService: DatabaseService;
    private loggerService: LoggerService;

    constructor() {
        this.databaseService = new DatabaseService();
        this.loggerService = new LoggerService();
    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.databaseService.findAllUsers();
            res.status(200).json(users);
        } catch (error) {
            this.loggerService.log('Error fetching users', error);
            res.status(500).send('Error fetching users');
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser = new User(req.body);
            const savedUser = await this.databaseService.saveUser(newUser);
            res.status(201).json(savedUser);
        } catch (error) {
            this.loggerService.log('Error creating user', error);
            res.status(500).send('Error creating user');
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.databaseService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                res.status(404).send('User not found');
                return;
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            this.loggerService.log('Error updating user', error);
            res.status(500).send('Error updating user');
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.databaseService.deleteUser(req.params.id);
            if (!result) {
                res.status(404).send('User not found');
                return;
            }
            res.status(200).send('User deleted successfully');
        } catch (error) {
            this.loggerService.log('Error deleting user', error);
            res.status(500).send('Error deleting user');
        }
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.databaseService.findUserById(req.params.id);
            if (!user) {
                res.status(404).send('User not found');
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            this.loggerService.log('Error fetching user by ID', error);
            res.status(500).send('Error fetching user');
        }
    }

    public async resetUserPassword(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.databaseService.findUserById(req.params.id);
            if (!user) {
                res.status(404).send('User not found');
                return;
            }
            user.password = 'newPassword'; // Reset logic, should be more secure
            const updatedUser = await this.databaseService.updateUser(user.id, user);
            res.status(200).json(updatedUser);
        } catch (error) {
            this.loggerService.log('Error resetting user password', error);
            res.status(500).send('Error resetting password');
        }
    }
}

export default new AdminController();