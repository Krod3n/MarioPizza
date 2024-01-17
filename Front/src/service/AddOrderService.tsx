
import Order from '../model/Order';
import AuthenticationService from './authentication-service';

export default class AddOrderService {

  static async addOrder(order: Order): Promise<Order> {

        return fetch('http://192.168.1.132:8080/pizza/order', {
          method: 'POST',
          body: JSON.stringify(order),
          headers: { 'Content-Type': 'application/json', 'Authorization': AuthenticationService.jwt}
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