
import User from "../model/User";
import AuthenticationService from "./authentication-service";

export default class AddUserService {

  static async addUser(user: User): Promise<User> {

        return fetch('http://192.168.1.132:8080/auth/add', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .catch(error => this.handleError(error));
      }
    
    
      static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
      }
    
      static handleError(error: Error): void {
        console.error(error);
      }}